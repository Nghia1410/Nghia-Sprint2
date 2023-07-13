package com.example.be.model;

import javax.persistence.*;

@Entity
@Table(name = "brand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_brand")
    private Integer idBrand;

    @Column(name = "name_brand")
    private String nameBrand;
}
