<!DOCTYPE html>
<html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
</head>
<body>
<div>
    <h1>Usuarios</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Telefone</th>
            <th>Actions</th>
        </tr>
        <c:forEach var="user" items="${users}">
        <tr>
            <td></td>
            <td>${user.id}</td>
            <td>${user.nome}</td>
            <td>${user.cpf}</td>
            <td>${user.email}</td>
            <td>${user.senha}</td>
            <td>${user.telefone}</td>
            <td>
                <form action="/delete-user" method="post">
                    <input type="hidden" id="ID_USER" name="ID_USER" value="${user.id}">
                    <button type="submit">Delete</button>
                    <span> | </span>
                    <a href="index.jsp?id=${user.id}&name=${user.nome}">Update</a>
                </form>
            </td>
        </tr>
        </c:forEach>
    </table>
</div>
</body>
</html>