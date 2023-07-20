package com.example.be.controller.login;

import com.example.be.config.MyUserPrincipal;
import com.example.be.dto.accountDTO.AuthRequest;
import com.example.be.dto.accountDTO.AuthResponse;
import com.example.be.dto.accountDTO.EmailConfirm;
import com.example.be.dto.accountDTO.GenericRequest;
import com.example.be.model.Account;
import com.example.be.service.account.IAccountService;
import com.example.be.utils.JwtTokenUtil;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;

@CrossOrigin
@RestController
public class LoginController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenUtil jwtUtil;

    @Autowired
    private IAccountService accountService;


    @PostMapping(value = "/api/login")
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request) {
        String errorMessages = "Tài khoản hoặc mật khẩu của bạn không đúng";
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getNameAccount(), request.getPassword())
            );

            MyUserPrincipal account = (MyUserPrincipal) authentication.getPrincipal();
            String accessToken = jwtUtil.generateAccessToken(account);
            AuthResponse response = new AuthResponse(account.getUsername(), account.getAuthorities(), accessToken);

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
        }
    }


    @PostMapping("/reset_password")
    public ResponseEntity<GenericRequest> resetPassword(@RequestBody @Valid GenericRequest genericRequest) {

        Account account = accountService.getByResetPasswordToken(genericRequest.getToken());

        if (account == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            accountService.updatePassword(account, genericRequest.getPassword());
            return new ResponseEntity<>(HttpStatus.OK);

        }
    }

    @GetMapping("/403")
    public ResponseEntity<?> daniedPage() {
        String message = "Bạn không có quyền truy cập trang này";
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}