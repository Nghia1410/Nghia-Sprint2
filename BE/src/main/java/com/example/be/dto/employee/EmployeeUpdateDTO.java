package com.example.be.dto.employee;

import org.hibernate.validator.constraints.Length;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.time.Period;

public class EmployeeUpdateDTO implements Validator {
    @NotNull(message = "Vui lòng chọn giới tính")
    private Boolean gender;
    @NotNull(message = "Không được bỏ trống")
    private LocalDate dateOfBirth;
    @NotNull(message = "Không được bỏ trống")
    @Min(value = 1,message = "Lương phải lớn hơn 1")
    private Double salary;
    @NotBlank(message = "Không được bỏ trống")
//    @Pattern(regexp = "^.{0,}(.png|.jpg|.jpeg)[?](alt=media&token=).{0,}$",message = "Sai định dạng ảnh, phải có dạng đuôi .jpg, .jpeg, .png")
    private String image;
    @NotBlank(message = "Không được bỏ trống")
    @Pattern(regexp = "^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+)$",message = "Tên phải nhập đúng định dạng. VD: Nguyễn Văn A")
    @Length(min = 5,max = 100,message = "Trường này ít nhất 5 ký tự và nhiều nhất 100 ký tự")
    private String nameEmployee;
    @NotBlank(message = "Không được bỏ trống")
    private String address;
    @NotBlank(message = "Không được bỏ trống")
    @Pattern(regexp = "^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$",message = "Nhập đúng định dạng SĐT. VD: 0905.223.XXX (X là chữ số)")
    private String phoneNumber;
    @NotBlank(message = "Không được bỏ trống")
    @Email(message = "Email phải đúng định dạng")
    private String email;
    @NotNull(message = "Vui lòng chọn vị trí")
    private PositionDTO positionDTO;

    public EmployeeUpdateDTO() {
    }
//    public void setSalary(String input) {
//        if (input == null || input.isEmpty()) {
//            salary = null;
//            System.out.println("Lương không tồn tại.");
//        } else {
//            try {
//                salary = Double.parseDouble(input);
//                System.out.println("Lương: " + salary);
//            } catch (NumberFormatException e) {
//                salary = null;
//                System.out.println("Không thể chuyển đổi thành số thực.");
//            }
//        }
//    }
    public int getAge() {
        LocalDate currentDate = LocalDate.now();
        LocalDate birthDate = getDateOfBirth();
        if (birthDate!=null){
            return Period.between(birthDate, currentDate).getYears();
        }
        return 0;
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

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
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

    public PositionDTO getPositionDTO() {
        return positionDTO;
    }

    public void setPositionDTO(PositionDTO positionDTO) {
        this.positionDTO = positionDTO;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public void validate(Object target, Errors errors) {
        EmployeeUpdateDTO employeeUpdateDTO=(EmployeeUpdateDTO) target;
    }
}
