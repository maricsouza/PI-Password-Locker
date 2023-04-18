package br.com.passwordLocker.dao;

import br.com.passwordLocker.model.UserModel;

import java.sql.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class UserDao {
    public UserDao() {
    }

    public void createUser(UserModel user) {
        String sql = "INSERT INTO tb_user (nome,cpf,email,senha,telefone) VALUES(?,?,?,?,?)";

        try {
            Connection connection = DriverManager.getConnection("jdbc:h2:~/test", "sa", "sa");
            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setString(1, user.getNome());
            ps.setString(2, user.getCpf());
            ps.setString(3, user.getEmail());
            ps.setString(4, user.getSenha());
            ps.setString(5, user.getTelefone());
            ps.execute();
            connection.close();
        } catch (Exception var5) {
            System.err.println("Algo deu errado: " + var5.getMessage());
        }

    }

    public List<UserModel> findAllUsers() throws SQLException {
        String SQL = "SELECT * FROM TB_USER";

        try {

            Connection connection = DriverManager.getConnection("jdbc:h2:~/test", "sa", "sa");

            System.out.println("Acessou database");

            PreparedStatement preparedStatement = connection.prepareStatement(SQL);

            ResultSet resultSet = preparedStatement.executeQuery();

            List<UserModel> users = new ArrayList<>();

            while (resultSet.next()) {
                System.out.println("Has next()");

                String userName = resultSet.getString("NOME");
                String userEmail = resultSet.getString("EMAIL");
                String userPassword = resultSet.getString("SENHA");
                String userPhone = resultSet.getString("TELEFONE");
                String userCpf = resultSet.getString("CPF");

                UserModel user = new UserModel(userName, userCpf, userEmail, userPassword, userPhone);

                System.out.println(user.getNome());
                users.add(user);

            }
            System.out.println("success in select * tb_user");

            connection.close();

            return users;

        } catch (Exception e) {

            System.out.println("fail in database connection");

            return Collections.emptyList();

        }

    }
}