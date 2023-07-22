package com.example.be.repository.product;

import com.example.be.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product ", nativeQuery = true)
    List<Product> findByAll();


    @Query(value = "select * from product  WHERE id_product = :id_product ", nativeQuery = true)
    Product findByIdProduct(@Param("id_product") int idProduct);

    @Query(value = "select * from product where id_type = :idType" , nativeQuery = true)
    List<Product> getProductByType(@Param("idType") Integer type);
}
