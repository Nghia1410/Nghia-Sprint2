package com.example.be.config;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/CreateCookie")
public class CreateCookieServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Cookie usernameCookie = new Cookie("username", "Nghĩa");

        usernameCookie.setMaxAge(7 * 24 * 60 * 60);








        // Đặt thời gian sống của cookie (ví dụ: 7 ngày)


        // Đặt path của cookie (tùy chọn)
        // usernameCookie.setPath("/myapp"); // Đặt path nếu cần

        // Thêm cookie vào phản hồi
        response.addCookie(usernameCookie);

        response.getWriter().println("Cookie đã được tạo thành công!");
    }
}

