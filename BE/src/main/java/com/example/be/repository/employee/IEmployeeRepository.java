package com.example.be.repository.employee;

import com.example.be.model.Employee;
import com.example.be.model.Position;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;



public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {


    @Query(value = "select * from employee where phone_number like %:phone_number%", nativeQuery = true)
    Page<Employee> findByPhone(
            @Param("phone_number") String phone, Pageable pageable);

    @Query(value = "select * from employee where id_employee = :idEmployee", nativeQuery = true)
    Employee findEmployeeById(Integer idEmployee);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO employee ( name_employee,gender,date_of_birth, salary, image, address, phone_number, email, id_position, id_account) "
            + "VALUES (:name_employee, :gender, :date_of_birth, :salary, :image, :address, :phone_number, :email, :id_position,:id_account)",
            nativeQuery = true)
    void saveEmployee(
            @Param("name_employee") String nameEmployee,
            @Param("gender") Boolean gender,
            @Param("date_of_birth") LocalDate dateOfBirth,
            @Param("salary") double salary,
            @Param("image") String image,
            @Param("address") String address,
            @Param("phone_number") String phoneNumber,
            @Param("email") String email,
            @Param("id_position") Position positionDTOPosition,
            @Param("id_account") Integer idAccount);


    @Query(value = "select * from employee", nativeQuery = true)
    Page<Employee> showListEmployee(Pageable pageable);

    @Query(value = "select * from employee as e join account as a on e.id_account = a.id_account where e.name_employee like %:name_employee% and a.name_account like %:name_account% and e.phone_number like %:phone_number%", nativeQuery = true)
    Page<Employee> findByAll(
            @Param("name_employee") String nameEmployee,
            @Param("name_account") String nameAccount,
            @Param("phone_number") String phoneNumber,
            Pageable pageable);

    @Query(value = "select * from employee where name_employee like %:name_employee% ", nativeQuery = true)
    Page<Employee> findByName(
            @Param("name_employee") String name,
            Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "delete from employee where id_employee = :idEmployee", nativeQuery = true)
    void deleteEmployeeById(Integer idEmployee);

}



