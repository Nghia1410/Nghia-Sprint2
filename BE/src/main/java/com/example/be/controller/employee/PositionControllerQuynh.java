package com.example.be.controller.employee;

import com.example.be.model.Position;
import com.example.be.service.employee.IPositionServiceQuynh;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/position")
public class PositionControllerQuynh {
    @Autowired
    private IPositionServiceQuynh iPositionServiceQuynh;
    @GetMapping("")
    public ResponseEntity<List<Position>> showList() {
        List<Position> positionList = iPositionServiceQuynh.findAll();
        if (positionList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(positionList, HttpStatus.OK);
        }
    }
}
