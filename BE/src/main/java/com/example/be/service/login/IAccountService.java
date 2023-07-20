package com.example.be.service.login;

import com.example.be.model.Account;

public interface IAccountService {
    void updateResetPasswordToken(String token, String email);
    Account getByResetPasswordToken(String token);

    void updatePassword(Account account, String newPassword);

    Account findByEmail(String userEmail);
}