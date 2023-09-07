package com.example.be.controller;

import com.example.be.model.Brand;
import com.example.be.model.Product;
import com.example.be.model.ProductType;
import com.example.be.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductRestController {
    @Autowired
    private IBrandService iBrandService;

    @Autowired
    private IProductTypeService iProductTypeService;

    @Autowired
    private IProductService iProductService;

    @Autowired
    private ICartDetailService iCartDetailService;

    @Autowired
    private IUserService iUserService;

    @Autowired
    private ICartService iCartService;

    @Autowired
    private IPurchaseService iPurchaseService;

    @GetMapping("/search/{productName}")
    public ResponseEntity<List<Product>> listProduct1(@PathVariable("productName") String productName) {
        List<Product> listProduct = iProductService.searchByName(productName);
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }



    @GetMapping("/productByType/{type}")
    public ResponseEntity<List<Product>> displayProductByType(@PathVariable Integer type) {
        List<Product> products = iProductService.getProductByTypeProduct(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/brand")
    public ResponseEntity<List<Brand>> showListBrand() {
        List<Brand> brandList = iBrandService.findAll();
        if (brandList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(brandList, HttpStatus.OK);
        }
    }

    @GetMapping("/type")
    public ResponseEntity<List<ProductType>> showListType() {
        List<ProductType> productTypeList = iProductTypeService.findAll();
        if (productTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productTypeList, HttpStatus.OK);
        }
    }

    @GetMapping("")
    public ResponseEntity<List<Product>> listProduct() {
        List<Product> listProduct = iProductService.showList();
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable("id") Integer id) {
        Product product = iProductService.findById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
