package com.example.be.service;

import com.example.be.dto.ICartDetailDto;
import com.example.be.model.PurchaseHistory;

import java.util.List;

public interface IPurchaseService {
    List<ICartDetailDto> findAllByUserId(Integer userId);

    PurchaseHistory save (PurchaseHistory purchaseHistory);
}
