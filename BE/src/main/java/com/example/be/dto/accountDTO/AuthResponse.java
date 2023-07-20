package com.example.be.dto.accountDTO;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class AuthResponse {

    private String nameAccount;
    private String accessToken;

    private Collection<? extends GrantedAuthority> roles;

    public AuthResponse() { }

    public AuthResponse(String nameAccount, String accessToken) {
        this.nameAccount = nameAccount;
        this.accessToken = accessToken;
    }

    public AuthResponse(String username, Collection<? extends GrantedAuthority> authorities, String accessToken) {
        this.nameAccount = username;
        this.accessToken = accessToken;
        this.roles = authorities;
    }

    public String getNameAccount() {
        return nameAccount;
    }

    public void setNameAccount(String nameAccount) {
        this.nameAccount = nameAccount;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Collection<? extends GrantedAuthority> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends GrantedAuthority> roles) {
        this.roles = roles;
    }
}
