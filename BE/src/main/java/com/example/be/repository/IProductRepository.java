package com.example.be.repository;

import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product ", nativeQuery = true)
    Page<Product> findByAll(
            Pageable pageable);

    @Modifying
    @Query(value = "select * from product  WHERE id_product = :id_product ", nativeQuery = true)
    Product findById(@Param("id_product") int idProduct);
}
