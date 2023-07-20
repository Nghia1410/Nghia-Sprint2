package com.example.be.dto.accountDTO;

public class EmailConfirm {
    private String emailConfirm;

    private String location;
    private String token;

    public EmailConfirm(String emailConfirm, String token) {
        this.emailConfirm = emailConfirm;
        this.token = token;
    }

    public String getEmailConfirm() {
        return emailConfirm;
    }

    public void setEmailConfirm(String emailConfirm) {
        this.emailConfirm = emailConfirm;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
