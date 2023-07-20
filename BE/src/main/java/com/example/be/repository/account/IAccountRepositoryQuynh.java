package com.example.be.repository.account;

import com.example.be.model.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IAccountRepositoryQuynh extends JpaRepository<Account,Integer> {

    @Query(value = "SELECT * from account where name_account = :nameAccount",nativeQuery = true)
    Account findByNameAccount(String nameAccount);

    @Modifying
    @Transactional
    @Query(value = "UPDATE account SET password = :newPassword WHERE id_account = :id",nativeQuery = true)
    void updatePassword(@Param("newPassword")String newPassword, @Param("id")Integer id);

    @Modifying
    @org.springframework.transaction.annotation.Transactional
    @Query(value = "insert into account(name_account , password) values (:name_account , :password)", nativeQuery = true)
    void createAccount(@Param("name_account") String nameAccount
            , @Param("password") String password);

    @Query(value = "select * from account", nativeQuery = true)
    List<Account> accountList();


    @Query(value = "select * from account where name_account = :nameAccount",nativeQuery = true)
    Account findByName (String nameAccount);


    @Query(value = "select * from account where name_account like %:name_account%", nativeQuery = true)
    Page<Account> findAccountUserByNameAccount(@Param("name_account") String nameAccount, Pageable pageable);

    @Query(value = "select * from account where reset_password_token = ?1", nativeQuery = true)
    Account findByResetPasswordToken(String token);


    @Query(value = "SELECT * FROM account a join employee e on a.id_account = e.id_account WHERE e.email = ?1", nativeQuery = true)
    Account findByEmail(String email);
}
