package com.example.be.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Integer userId;
    @Column(name = "username",unique = true)
    private String username;
    @JsonIgnore
    private String password;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private Set<UserRole> userRoleSet;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private Set<Cart> cartSet;

    @OneToMany(mappedBy = "user")
    @JsonBackReference
    private Set<PurchaseHistory> purchaseHistorySet;

    public User() {
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<UserRole> getUserRoleSet() {
        return userRoleSet;
    }

    public void setUserRoleSet(Set<UserRole> userRoleSet) {
        this.userRoleSet = userRoleSet;
    }

    public Set<Cart> getCartSet() {
        return cartSet;
    }

    public void setCartSet(Set<Cart> cartSet) {
        this.cartSet = cartSet;
    }

    public Set<PurchaseHistory> getPurchaseHistorySet() {
        return purchaseHistorySet;
    }

    public void setPurchaseHistorySet(Set<PurchaseHistory> purchaseHistorySet) {
        this.purchaseHistorySet = purchaseHistorySet;
    }
}
