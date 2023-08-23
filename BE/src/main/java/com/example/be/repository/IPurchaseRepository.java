package com.example.be.repository;

import com.example.be.dto.ICartDetailDto;
import com.example.be.model.PurchaseHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IPurchaseRepository extends JpaRepository<PurchaseHistory, Integer> {

    @Query(value = " select p.amount as amount, ph.purchase_history_id as idHistory,ph.code_bill as codeBill, ph.order_date as orderDate,\n" +
            " ph.total as total, p.image as image, p.product_name as productName, u.username as username\n" +
            " from purchase_history ph \n" +
            "join user as u on u.user_id = ph.user_user_id \n" +
            "JOIN cart_detail cd ON cd.purchase_history_id = ph.purchase_history_id\n" +
            "JOIN product p ON p.product_id = cd.product_id where ph.user_user_id = :userId order by ph.purchase_history_id desc", nativeQuery = true)
    List<ICartDetailDto> findAllnByUserId(@Param("userId") Integer userId);

}
