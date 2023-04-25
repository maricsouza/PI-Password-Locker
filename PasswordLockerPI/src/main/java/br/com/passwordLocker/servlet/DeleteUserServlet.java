package br.com.passwordLocker.servlet;

import br.com.passwordLocker.dao.UserDao;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/delete-user")
public class DeleteUserServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {

        String userID = req.getParameter("ID_USER");

        new UserDao().deleteCarById(userID);

        resp.sendRedirect("/find-all-users");

    }

}