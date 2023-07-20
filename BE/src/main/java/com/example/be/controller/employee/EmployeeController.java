package com.example.be.controller.employee;


import com.example.be.dto.employee.EmployeeDTO;
import com.example.be.model.Employee;
import com.example.be.service.employee.impl.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;


    @GetMapping("")
    public ResponseEntity<Page<Employee>> listEmployee(@RequestParam(value = "page", defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Employee> listEmployee = employeeService.showList(pageable);
        return new ResponseEntity<>(listEmployee, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Page<Employee>> findByName(@RequestParam(value = "page", defaultValue = "0") int page, @PathVariable String name) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Employee> listEmployee = employeeService.findByName(name, pageable);
        if (listEmployee.isEmpty()) {
            return new ResponseEntity<>(listEmployee, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(listEmployee, HttpStatus.OK);
    }

    @GetMapping("/phone/{phoneNumber}")
    public ResponseEntity<?> findByPhone(@RequestParam(value = "page", defaultValue = "0") int page, @PathVariable String phoneNumber) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Employee> listEmployee = employeeService.findByPhone(phoneNumber, pageable);
        if (listEmployee.isEmpty()) {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(listEmployee, HttpStatus.OK);
    }

    @GetMapping("/search/{nameEmployee}&{nameAccount}&{phoneNumber}")
    public ResponseEntity<Page<Employee>> findByEmployee(@RequestParam(value = "page", defaultValue = "0") int page, @PathVariable String nameAccount, @PathVariable String nameEmployee, @PathVariable String phoneNumber) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Employee> listEmployee = employeeService.findByEmployee(nameEmployee, nameAccount, phoneNumber, pageable);
        if (listEmployee.isEmpty()) {
            return new ResponseEntity<>(listEmployee, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(listEmployee, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    public ResponseEntity<?> createEmployeeWithAccount(@Valid @RequestBody EmployeeDTO employeeDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        employeeService.create(employeeDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public void deleteEmployeeById(@PathVariable("id") Integer id) {
        employeeService.deleteByIdEmployee(id);
    }

    @GetMapping("findById/{idEmployee}")
    public Employee findEmployeeById(@PathVariable("idEmployee") Integer id) {
        return employeeService.findEmployeeById(id);
    }

}
