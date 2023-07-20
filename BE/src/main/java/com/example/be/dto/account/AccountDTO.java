package com.example.be.dto.account;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

public class AccountDTO {
    private String nameAccount;
    private Integer idPosition;
    @NotBlank(message = "Không được bỏ trống")
    @Length(min = 5, max = 20, message = "Mật khẩu ít nhất 6 ký tự và nhiều nhất 20 ký tự")
    private String password;


    public AccountDTO() {

    }

    public String getNameAccount() {
        return nameAccount;
    }

    public void setNameAccount(String nameAccount) {
        this.nameAccount = nameAccount;
    }

    public AccountDTO(String nameAccount, String password) {
        this.nameAccount = nameAccount;
        this.password = password;
    }

    public Integer getIdPosition() {
        return idPosition;
    }

    public void setIdPosition(Integer idPosition) {
        this.idPosition = idPosition;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
