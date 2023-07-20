package com.example.be.service.employee;

import com.example.be.model.Employee;

public interface IEmployeeInformationService {

    Employee findByNameAccount(String nameAccount);


    void updateEmployee(Employee employee);

    Boolean existsByEmail(String email);
}
