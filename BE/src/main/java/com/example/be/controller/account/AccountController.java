package com.example.be.controller.account;

import com.example.be.dto.account.ChangePasswordForm;
import com.example.be.model.Account;
import com.example.be.model.Employee;
import com.example.be.service.account.IAccountService;
import com.example.be.service.employee.IEmployeeInformationService;
import com.example.be.utils.JwtTokenFilter;
import com.example.be.utils.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/v2/account")
public class AccountController {
    @Autowired
    private IAccountService accountService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private IEmployeeInformationService iEmployeeInformationService;

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(HttpServletRequest request, @Validated @RequestBody ChangePasswordForm changePasswordForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        String token = null;
        String nameAccount = null;
        if (jwtTokenFilter.hasAuthorizationBearer(request)) {
            token = jwtTokenFilter.getAccessToken(request);
        }
        if (token != null && jwtTokenUtil.validateAccessToken(token)) {
            nameAccount = jwtTokenUtil.getSubject(token);
        }
        Employee employee = iEmployeeInformationService.findByNameAccount(nameAccount);
        if (employee == null) {
            return new ResponseEntity<>("Người dùng không tồn tại ", HttpStatus.BAD_REQUEST);
        }
        Account account = accountService.findByNameAccount(employee.getAccount().getNameAccount());
        if (account == null) {
            return new ResponseEntity<>("Tài khoản không tồn tại", HttpStatus.BAD_REQUEST);
        }
        if (Boolean.FALSE.equals(accountService.checkIfValidOldPassword(account, changePasswordForm.getOldPassword()))) {
            return new ResponseEntity<>("Mật khẩu hiện tại không đúng", HttpStatus.BAD_REQUEST);
        }
        if (changePasswordForm.getNewPassword().equals(changePasswordForm.getOldPassword())) {
            return new ResponseEntity<>("Mật khẩu mới không được trùng với mật khẩu cũ", HttpStatus.BAD_REQUEST);

        }
        if (!changePasswordForm.getNewPassword().equals(changePasswordForm.getConfirmPassword())) {
            return new ResponseEntity<>("Mật khẩu xác nhận không trùng khớp", HttpStatus.BAD_REQUEST);
        }
        accountService.changePassword(account, changePasswordForm.getNewPassword());
        return ResponseEntity.ok("Đổi mật khẩu thành công!");
    }
}
