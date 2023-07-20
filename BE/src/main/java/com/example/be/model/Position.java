package com.example.be.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "position")
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_position")
    private Integer idPosition;

    @Column(name = "name",columnDefinition = "Varchar(30)")
    private String name;


    @OneToMany(mappedBy = "position",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Employee> employeeSet;

    public Position() {
    }

    public Position(Integer idPosition, String name, Set<Employee> employeeSet) {
        this.idPosition = idPosition;
        this.name = name;
        this.employeeSet = employeeSet;
    }

    public Set<Employee> getEmployeeSet() {
        return employeeSet;
    }

    public void setEmployeeSet(Set<Employee> employeeSet) {
        this.employeeSet = employeeSet;
    }

    public Position(Integer idPosition) {
        this.idPosition = idPosition;
    }

    public Integer getIdPosition() {
        return idPosition;
    }

    public void setIdPosition(Integer idPosition) {
        this.idPosition = idPosition;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
