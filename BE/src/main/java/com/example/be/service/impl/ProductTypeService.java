package com.example.be.service.impl;

import com.example.be.model.ProductType;
import com.example.be.repository.IProductTypeRepository;
import com.example.be.service.IProductService;
import com.example.be.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
   private IProductTypeRepository productTypeRepository;

    @Override
    public List<ProductType> findAllProductType() {
        return productTypeRepository.findAllProductType();
    }
}
