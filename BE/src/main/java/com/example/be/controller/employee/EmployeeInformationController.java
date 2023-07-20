package com.example.be.controller.employee;

import com.example.be.dto.employee.EmployeeUpdateDTO;
import com.example.be.model.Employee;
import com.example.be.model.Position;
import com.example.be.service.employee.IEmployeeInformationService;
import com.example.be.utils.JwtTokenFilter;
import com.example.be.utils.JwtTokenUtil;
import org.springframework.beans.BeanUtils;
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
@RequestMapping("/v2/employee")
@CrossOrigin("*")
public class EmployeeInformationController {
    @Autowired
    private IEmployeeInformationService iEmployeeInformationService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;

    @GetMapping("/detail")
    public ResponseEntity<?> findByNameAccount(HttpServletRequest request) {
        String token = null;
        String nameAccount=null;
        if(jwtTokenFilter.hasAuthorizationBearer(request)){
            token = jwtTokenFilter.getAccessToken(request);
        }
        if(token != null && jwtTokenUtil.validateAccessToken(token)){
            nameAccount = jwtTokenUtil.getSubject(token);
        }
        Employee employee = iEmployeeInformationService.findByNameAccount(nameAccount);
        if (employee == null) {
            return new ResponseEntity<>("Người dùng không tồn tai",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PatchMapping("/update")
    public ResponseEntity<?> updateEmployee(HttpServletRequest request, @Validated @RequestBody EmployeeUpdateDTO employeeUpdateDTO, BindingResult bindingResult) {
        String token = null;
        String nameAccount=null;
        if(jwtTokenFilter.hasAuthorizationBearer(request)){
            token = jwtTokenFilter.getAccessToken(request);
        }
        if(token != null && jwtTokenUtil.validateAccessToken(token)){
            nameAccount = jwtTokenUtil.getSubject(token);
        }
        Employee employee = iEmployeeInformationService.findByNameAccount(nameAccount);
        if (employee == null) {
            return new ResponseEntity<>("Người dùng không tồn tai",HttpStatus.BAD_REQUEST);
        }
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
        int age = employeeUpdateDTO.getAge();
        if (age < 15) {
            return new ResponseEntity<>("Người dùng phải từ 15 tuổi trở lên",HttpStatus.BAD_REQUEST);
        }
        if ( !employee.getEmail().equals(employeeUpdateDTO.getEmail()) && Boolean.TRUE.equals(iEmployeeInformationService.existsByEmail(employeeUpdateDTO.getEmail()))) {
            return new ResponseEntity<>("Email đã tồn tại", HttpStatus.BAD_REQUEST);
        }
        BeanUtils.copyProperties(employeeUpdateDTO,employee);
        employee.setPosition(new Position(employeeUpdateDTO.getPositionDTO().getIdPosition()));
        iEmployeeInformationService.updateEmployee(employee);
        return new ResponseEntity<>("Chỉnh sửa thành công",HttpStatus.OK);
    }
}
