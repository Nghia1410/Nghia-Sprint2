package com.example.be.dto.accountDTO;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class GenericRequest {
    private String token;
    @NotNull(message = "Trường này không được để trống")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,10}$", message = "mật khẩu từ 8 đến 10 ký tự")
    private String password;

    public GenericRequest() {
    }

    public GenericRequest(String token, String password) {
        this.token = token;
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
