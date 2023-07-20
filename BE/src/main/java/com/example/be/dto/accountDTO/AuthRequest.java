package com.example.be.dto.accountDTO;

import javax.validation.constraints.NotNull;

public class AuthRequest {
    @NotNull(message = "Trường này không được để trống")
//    @Length(min = 8, max = 10, message = "tên tài khoản từ 8 đến 10 ký tự" )
    private String nameAccount;

    @NotNull(message = "Trường này không được để trống")
//    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$", message = "mật khẩu từ 8 đến 10 ký tự")
    private String password;

    public String getNameAccount() {
        return nameAccount;
    }

    public void setNameAccount(String nameAccount) {
        this.nameAccount = nameAccount;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
