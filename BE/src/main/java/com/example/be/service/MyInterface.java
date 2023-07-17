package com.example.be.service;

public interface MyInterface {
    default void myMethod(){
        System.out.println("abc");
    }
}
