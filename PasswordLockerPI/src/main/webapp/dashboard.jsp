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
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Telefone</th>
        </tr>
        <c:forEach var="user" items="${users}">
        <tr>
            <td></td>
            <td>${user.nome}</td>
            <td>${user.cpf}</td>
            <td>${user.email}</td>
            <td>${user.senha}</td>
            <td>${user.telefone}</td>
        </tr>
        </c:forEach>
    </table>
</div>
</body>
</html>