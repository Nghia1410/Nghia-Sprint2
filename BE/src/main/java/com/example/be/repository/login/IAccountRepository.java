package com.example.be.repository.login;

import com.example.be.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IAccountRepository extends JpaRepository<Account, Integer> {
    @Query(value = "select * from account where name_account = ?1", nativeQuery = true)
    Account findByNameAccount(String username);

    @Query(value = "SELECT * FROM account a join employee e on a.id_account = e.id_account WHERE e.email = ?1", nativeQuery = true)
     Account findByEmail(String email);

    @Query(value = "select * from account where reset_password_token = ?1", nativeQuery = true)
    Account findByResetPasswordToken(String token);


}
