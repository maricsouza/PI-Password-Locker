# PI-Password-Locker

## Envolvidos na Password-Locker
#### Turma D - TADS 3° Semestre 

- Tiago Fernandes<a href="https://www.linkedin.com/in/tiago-fernandes-ribeiro-03074815a/">💼Linkedin</a> <a href ="https://github.com/TiagoFernandes11">👩‍💻Github</a> 

- Kevin Pereira <a href="https://www.linkedin.com/in/kevin-alves-pereira/">💼Linkedin</a> <a href ="https://github.com/KevinAlvss">👩‍💻Github</a>

- Mariana Souza do Carmo <a href="https://www.linkedin.com/in/mariana-souza-240368224/">💼Linkedin</a> <a href ="https://github.com/maricsouza">👩‍💻Github</a>

- Nathalia da Rocha Santos<a href="">💼Linkedin</a> <a href ="https://github.com/NathaliadaRocha07">👩‍💻Github</a>

- Raian Medeiros Nolaço<a href="https://www.linkedin.com/in/raiannolaço/">💼Linkedin</a> <a href ="https://github.com/RaianNolaco?tab=repositories">👨‍💻Github</a>

- Vyviane Sousa Santos<a href="https://www.linkedin.com/in/vyvianesouza/">💼Linkedin</a> <a href ="https://github.com/Vyviane">👨‍💻Github</a>


## Links do projeto

- [Caso de uso (senac123)](https://whimsical.com/wolf-broker-X3JvkwLwjutfnSwNFmRTAv).
- [Protótipo Low/High Fidelity](https://www.figma.com/file/jegfVuFEJKQAzROxfipCPn/password-locker?node-id=54%3A2&t=JHLM2Gwa2P6bLFcQ-1).
- [MER](https://dbdesigner.page.link/MGXjLeVJCLgFKWcG9).
- [API (Backend)](https://github.com/TiagoFernandes11/PasswordLocker-Api).


## Funcionalidades
---
### Login
> Efetuar login em conta já existente
### Cadastro
> Criar uma conta em nossa corretora
### Cadastrar senhas
> Cadastrar senhas para poder consultar mais tarde
### Consultar senhas
> Consultar senhas já existentes
### Sugerir senhas fortes
> Gerar senhas fortes para o usuario
### Excluir contas
> Exclui a conta do cliente
---

## Casos de Uso
![image](/prototipacao/casos-de-uso/casos%20de%20uso%20pi.png)

## MER
![image](prototipacao/layout-mer/mer.png)

## Layout High-Fidelity

### Tela de cadastro
![image](https://user-images.githubusercontent.com/81928036/226070073-41cc1df1-2d22-4654-b7b9-babf1393a538.png)

<!--- This is an HTML comment in Markdown 
  # (### Dashboard)
  # (![image](prototipacao/layout-mer/mer.png))

  # (### Adicionar senha)
  # (![image](prototipacao/layout-mer/mer.png))
--> 

### Tela de Login
![image](https://user-images.githubusercontent.com/81928036/226070826-751dfb19-cf12-4dbb-8f22-6be3dbf5c089.png)

### Tela da Home
![image](https://user-images.githubusercontent.com/81928036/226070080-338a71ed-cd7a-427f-a445-455fbba8ce21.png)

### Tela de criação e geração de uma nova senha 
![image](https://user-images.githubusercontent.com/81928036/226071095-7d81117c-dfb5-481d-9e85-8361b409f3b5.png)

### Tela de alteração de senha
![image](https://user-images.githubusercontent.com/81928036/226070087-e9b1907e-d249-48cd-a924-a89e9272b48b.png)

### Tela de Perfil
![image](https://user-images.githubusercontent.com/81928036/226070689-f9b82eda-0ff0-447c-844c-a7db7666b56f.png)

### Tela de Altera
![image](https://user-images.githubusercontent.com/102376831/226072943-c3ea8c79-9de4-42ce-8c66-f12b698200e4.png)

### Tela de Normal Facebook
![image](https://user-images.githubusercontent.com/102376831/226073004-d5dcdaa5-b18e-4bbb-a840-99b2eb24ee42.png)

### Tela de Hover Senac
![image](https://user-images.githubusercontent.com/102376831/226073582-c9ddaa60-9d84-4883-a8f6-0a6c2a1eb039.png)







### Script do banco de dados 

```
	DROP DATABASE PASSWORD_LOCKER;
	CREATE DATABASE PASSWORD_LOCKER;
	SHOW DATABASES;
	USE PASSWORD_LOCKER;

	CREATE TABLE TB_USER (
		ID_USER              VARCHAR(36) PRIMARY KEY NOT NULL,
		NOME                 VARCHAR(50) NOT NULL,
		EMAIL				 VARCHAR(80) NOT NULL UNIQUE,
		SENHA				 VARCHAR(100) NOT NULL,
		TELEFONE             VARCHAR(14),
		DATA_CRIACAO         DATETIME NOT NULL,
		DATA_ALTERACAO 		 DATETIME,
		USER_KEY			 VARCHAR(36) NOT NULL UNIQUE
	);

	CREATE TABLE TB_SENHA (
		ID_SENHA             VARCHAR(36) PRIMARY KEY NOT NULL,
		TITULO		         VARCHAR(100) NOT NULL,
		SENHA 				 varchar(100) NOT NULL,
		USER_SITE		     varchar(100),		 
		DATA_CRIACAO         DATE NOT NULL,
		DATA_ALTERACAO 		 DATE,
		ID_USER              VARCHAR(36) NOT NULL,
		FOREIGN KEY (ID_USER) REFERENCES TB_USER(ID_USER)
	);

	 SELECT * FROM TB_USER;
	 SELECT * FROM TB_SENHA;			
```


