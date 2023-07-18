package com.example.be.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private Integer idProduct;

    @Column(name = "name_product",columnDefinition = "MEDIUMTEXT")
    private String nameProduct;


    @Column(name = "price", columnDefinition = "DOUBLE")
    private Double price;

    @Column(name = "image", columnDefinition = "MEDIUMTEXT")
    private String image;

    @ManyToOne
    @JoinColumn(name = "id_type", referencedColumnName = "id_type")
    private ProductType productType;

    @ManyToOne
    @JoinColumn(name = "id_brand", referencedColumnName = "id_brand")
    private Brand brand;

    public Product() {
    }

    public Product(Integer idProduct, String nameProduct, Double price, String image, ProductType productType) {
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.price = price;
        this.image = image;
        this.productType = productType;
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
