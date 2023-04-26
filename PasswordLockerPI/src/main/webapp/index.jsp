<!DOCTYPE html>
<html lang="pt-Br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet">
    <title>Cadastro</title>
    <style>

        body {
            background-image: linear-gradient(to right bottom, #021e94, #004db2, #00669c, #00786a, #008639);            justify-content: center;
            display: flex;
            align-items: center;
            height: 100vh;
            color: #fff;
            font-family: 'Roboto', sans-serif;
        }
        h2 {
            margin-left: 100px;
            color: #fff;

        }
        form {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 60px;

        }
        label, input, button {
            display: block;
            margin-bottom: 10px;
            font-size: 18px;
        }
        input {
            width: 100%;
            padding: 4px;
            background: none;
            border: none;
            border-bottom: 1px solid #fff;
            color: #fff;
        }
        button {
            width: 100%;
            padding: 10px;
            margin-left: 10px;
            margin-top: 10px;
            background-color: #004db2;
            color: #fff;
            cursor: pointer;
            border-radius:4px;
            border: none;
            transition: all 0.3s ease;
        }
        input:focus {
            outline: none;
        }
        button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<html>
<body>

<form action="/cadastrar" method="post">

    <h2>Cadastrar Usuário</h2>

    <label>Nome</label>
    <input type="text" name="user-name" id="user-name">

    <label>Email</label>
    <input type="email" name="user-email" id="user-email">

    <label>Senha</label>
    <input type="password" name="user-password" id="user-password">

    <label>Telefone</label>
    <input type="text" name="user-phone" id="user-phone">

    <label>CPF</label>
    <input type="text" name="user-cpf" id="user-cpf">

    <button type="submit">Cadastrar</button>
</form>
</body>
</html>
