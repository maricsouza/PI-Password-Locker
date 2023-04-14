package br.com.passwordLocker.servlet;

import br.com.passwordLocker.dao.UserDao;
import br.com.passwordLocker.model.UserModel;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet({"/cadastrar"})
public class CreateUserServlet extends HttpServlet {
    public CreateUserServlet() {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userName = request.getParameter("user-name");
        String userEmail = request.getParameter("user-email");
        String userPassword = request.getParameter("user-password");
        String userPhone = request.getParameter("user-phone");
        String userCpf = request.getParameter("user-cpf");

        UserModel user = new UserModel(userName, userCpf, userEmail, userPassword, userPhone);
        (new UserDao()).createUser(user);

        request.getRequestDispatcher("index.html").forward(request, response);
    }
}
