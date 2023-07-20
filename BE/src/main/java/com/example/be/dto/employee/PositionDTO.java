package com.example.be.dto.employee;

public class PositionDTO {
    private Integer idPosition;
    private String name;

    public PositionDTO() {
    }

    public PositionDTO(Integer idPosition, String name) {
        this.idPosition = idPosition;
        this.name = name;
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
