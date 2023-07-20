package com.example.be.dto.account;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

public class ChangePasswordForm {
        @Length(min = 5, max = 20, message = "Mật khẩu ít nhất 5 ký tự và nhiều nhất 20 ký tự")
//    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$", message = "mật khẩu từ 8 đến 10 ký tự")
    @NotBlank(message = "Không được bỏ trống")
    private String oldPassword;
    @NotBlank(message = "Không được bỏ trống")
//    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$", message = "mật khẩu từ 8 đến 10 ký tự")
    @Length(min = 5, max = 20, message = "Mật khẩu ít nhất 5 ký tự và nhiều nhất 20 ký tự")
    private String newPassword;
//    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$", message = "mật khẩu từ 8 đến 10 ký tự")
        @Length(min = 5, max = 20, message = "Mật khẩu ít nhất 5 ký tự và nhiều nhất 20 ký tự")
    @NotBlank(message = "Không được bỏ trống")
    private String confirmPassword;

    public ChangePasswordForm() {

    }


    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
