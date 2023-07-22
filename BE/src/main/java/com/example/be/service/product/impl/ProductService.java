package com.example.be.service.product.impl;

import com.example.be.model.Product;
import com.example.be.repository.product.IProductRepository;
import com.example.be.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
   private IProductRepository productRepository;

    @Override
    public List<Product> showList() {
        return productRepository.findByAll();
    }

    @Override
    public Product findById(Integer id) {
        return productRepository.findByIdProduct(id);
    }

    @Override
    public List<Product> getProductByTypeProduct(Integer type) {
        return productRepository.getProductByType(type);
    }
}
