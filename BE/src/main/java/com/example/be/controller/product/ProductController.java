package com.example.be.controller.product;

import com.example.be.model.Product;
import com.example.be.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<Page<Product>> listProduct(@RequestParam(value = "page", defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Product> listProduct = productService.showList(pageable);
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }

    @GetMapping("/{idProduct}")
    public Product findProductById(@PathVariable("idProduct") Integer id) {
        return productService.findById(id);
    }
}
