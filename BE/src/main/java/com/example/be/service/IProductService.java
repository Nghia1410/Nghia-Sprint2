package com.example.be.service;

import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> showList(Pageable pageable);

    Product findById(int id);
}
