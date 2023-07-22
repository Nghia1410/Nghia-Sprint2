package com.example.be.service.product;

import com.example.be.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> showList();

    Product findById(Integer id);

    List<Product> getProductByTypeProduct(Integer type);
}
