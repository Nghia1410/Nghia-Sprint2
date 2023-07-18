package com.example.be.repository;

import com.example.be.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
    @Query(value = "select * from product_type", nativeQuery = true)
    List<ProductType> findAllProductType();
}
