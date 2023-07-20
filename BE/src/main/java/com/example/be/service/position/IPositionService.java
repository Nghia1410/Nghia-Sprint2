package com.example.be.service.position;

import com.example.be.model.Position;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IPositionService {
    List<Position> showList();
}
