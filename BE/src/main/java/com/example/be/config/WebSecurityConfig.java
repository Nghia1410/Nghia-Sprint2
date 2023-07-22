package com.example.be.config;

import com.example.be.service.login.impl.UserDetailServiceImpl;
import com.example.be.utils.JwtTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    AppConfig appConfig = new AppConfig();

    @Autowired
    private JwtTokenFilter jwtTokenFilter;

    @Autowired
    private UserDetailServiceImpl userDetailServiceImpl;


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailServiceImpl).passwordEncoder(appConfig.passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable().cors();

                http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.authorizeRequests().antMatchers("/", "/api/login", "/logout", "/reset_password", "/api/*").permitAll();
        http.authorizeRequests().antMatchers("/").access("hasAnyRole('ROLE_STAFF', 'ROLE_ADMIN')");

        http.authorizeRequests().antMatchers("/admin/*").access("hasRole('ROLE_ADMIN')");
        http.authorizeRequests().antMatchers("/v2").access("hasAnyRole('ROLE_STAFF', 'ROLE_ADMIN')");

        http.exceptionHandling()
                .authenticationEntryPoint(
                        (request, response, ex) -> {
                            response.sendError(
                                    HttpServletResponse.SC_UNAUTHORIZED,
                                    ex.getMessage()
                            );
                        }
                )
                .accessDeniedPage("/403");

        http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}