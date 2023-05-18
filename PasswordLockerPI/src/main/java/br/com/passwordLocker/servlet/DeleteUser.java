package br.com.passwordLocker.servlet;

import br.com.passwordLocker.dao.UserDao;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/delete-user")
public class DeleteUser extends HttpServlet{


    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {

        int id = Integer.parseInt(req.getParameter("id"));

        new UserDao().deleteUserById(id);

        resp.sendRedirect("/find-all-users");
    }
}
