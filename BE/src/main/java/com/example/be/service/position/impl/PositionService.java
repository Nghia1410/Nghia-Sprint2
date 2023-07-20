package com.example.be.service.position.impl;

import com.example.be.model.Position;
import com.example.be.repository.employee.IPositionRepository;
import com.example.be.service.position.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService implements IPositionService {

    @Autowired
    private IPositionRepository iPositionRepository;
    @Override
    public List<Position> showList() {
        return iPositionRepository.showPositionList();
    }
}
