package com.example.be.controller;

import com.example.be.model.ProductType;
import com.example.be.service.impl.ProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/productType")
public class ProductTypeController {
    @Autowired
    private ProductTypeService productTypeService;

    @GetMapping("")
    public ResponseEntity<List<ProductType>> getAllProductType() {
        List<ProductType> productTypeList = productTypeService.findAllProductType();
        return new ResponseEntity<>(productTypeList, HttpStatus.OK);
    }
}
