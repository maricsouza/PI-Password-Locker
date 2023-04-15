package br.com.passwordLocker.servlet;

import br.com.passwordLocker.dao.UserDao;
import br.com.passwordLocker.model.UserModel;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet("/find-all-users")
public class ListAllUsersServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        try {
            List<UserModel> users = new UserDao().findAllUsers();

            req.setAttribute("users", users);

            req.getRequestDispatcher("dashboard.jsp").forward(req, resp);

            System.out.println("Passou do requestDispatcher");

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
