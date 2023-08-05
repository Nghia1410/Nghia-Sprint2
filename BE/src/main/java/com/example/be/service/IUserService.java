package com.example.be.service;

import com.example.be.model.User;

import java.util.List;

public interface IUserService {
    User findUserByUsername(String username);

    boolean checkOldPassword(String oldPassword, String password);

    User findById(Integer userId);


}
