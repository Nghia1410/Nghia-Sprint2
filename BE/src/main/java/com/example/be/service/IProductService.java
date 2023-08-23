package com.example.be.service;

import com.example.be.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> searchByName(String productName);

    List<Product> showList();

    List<Product> getProductByTypeProduct(Integer type);

    Product findById(Integer productId);

    void setAmount(Integer amount, Integer productId);
}
