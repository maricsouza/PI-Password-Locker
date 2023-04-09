package br.com.passwordLocker.dao;

import br.com.passwordLocker.model.UserModel;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

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
}
