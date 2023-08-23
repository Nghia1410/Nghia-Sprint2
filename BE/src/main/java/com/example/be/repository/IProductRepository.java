package com.example.be.repository;

import com.example.be.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "select * from product where product_name LIKE CONCAT('%', :productName , '%')", nativeQuery = true)
    List<Product> searchByNameProduct(@Param("productName") String productName);

    @Query(value = "select * from product order by product_id desc", nativeQuery = true)
    List<Product> findByAll();

    @Query(value = "select * from product where product_type_id = :productTypeId", nativeQuery = true)
    List<Product> getProductByType(@Param("productTypeId") Integer type);

    @Modifying
    @Query(value = "update product set amount = :amount where product_id = :productId", nativeQuery = true)
    void setAmount(@Param("amount") Integer amount,
                   @Param("productId") Integer productId);
}
