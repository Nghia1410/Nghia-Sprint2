package com.example.be.dto.employee;

import com.example.be.model.Account;
import com.example.be.model.Position;
import org.hibernate.validator.constraints.Length;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.*;
import java.time.LocalDate;

public class EmployeeDTO implements Validator {


    private Integer idEmployee;

    @NotNull(message = "Không được để trống")
    private Boolean gender;

    @NotNull(message = "Không được bỏ trống")
    private LocalDate dateOfBirth;
    @NotNull(message = "Không được bỏ trống")
    @Min(value = 1, message = "Lương phải lớn hơn 1")
    private double salary;

    @NotBlank(message = "Không được để trống")
    @Length(min = 5, max = 300, message = "Trường này ít nhất 5 ký tự và nhiều nhất 300 ký tự")
    private String image;

    @NotBlank(message = "Không được bỏ trống")
    @Pattern(regexp = "^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+)$", message = "Tên phải nhập đúng định dạng. VD: Nguyễn Văn A")
    @Length(min = 5, max = 30, message = "Trường này ít nhất 5 ký tự và nhiều nhất 30 ký tự")
    private String nameEmployee;
    @NotBlank(message = "Không được để trống")
    @Length(min = 5, max = 100, message = "Trường này ít nhất 5 ký tự và nhiều nhất 100 ký tự")
    private String address;
    @NotBlank(message = "Không được bỏ trống")
    @Pattern(regexp = "^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$", message = "Nhập đúng định dạng SĐT. VD: 0905.223.XXX (X là chữ số)")
    @Length(min = 5, max = 20, message = "Trường này ít nhất 5 ký tự và nhiều nhất 20 ký tự")
    private String phoneNumber;
    @NotBlank(message = "khong duoc bo trong")
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "Email khong hop le")
    @Size(min = 8, max = 30, message = "email phai co do dai ty 20 đến 30 ky tu")
    private String email;
    @NotNull(message = "khong duoc bo trong")

    private Position position;
    @NotNull(message = "khong duoc bo trong")
    private Account account;


    // Constructors, getters, and setters

    public EmployeeDTO() {
    }

    public EmployeeDTO(Integer idEmployee, Boolean gender, LocalDate dateOfBirth, double salary, String image, String nameEmployee, String address, String phoneNumber, String email, Position position, Account account) {
        this.idEmployee = idEmployee;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
        this.image = image;
        this.nameEmployee = nameEmployee;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.position = position;
        this.account = account;
    }

    public Integer getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(Integer idEmployee) {
        this.idEmployee = idEmployee;
    }

    public Boolean getGender() {
        return gender;
    }

    public void setGender(Boolean gender) {
        this.gender = gender;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}

