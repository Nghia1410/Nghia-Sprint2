package com.example.be.model;

import javax.persistence.*;

@Entity
@Table(name = "product_type")
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_type")
    private Integer idType;

    @Column(name = "name_type",columnDefinition = "Varchar(40)")
    private String nameType;

    public ProductType() {
    }

    public ProductType(Integer idType, String nameType) {
        this.idType = idType;
        this.nameType = nameType;
    }

    public Integer getIdType() {
        return idType;
    }

    public void setIdType(Integer idType) {
        this.idType = idType;
    }

    public String getNameType() {
        return nameType;
    }

    public void setNameType(String nameType) {
        this.nameType = nameType;
    }
}
