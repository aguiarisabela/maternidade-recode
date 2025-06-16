-- Projeto Social: Mulheres - Curso Recode Pro AI
-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.
-- Squad 12

CREATE TABLE Usuario (
ID_Usuario INTEGER PRIMARY KEY,
Nome VARCHAR(50),
E_mail VARCHAR(50),
Senha VARCHAR(255),
Data_Criacao DATETIME
);

CREATE TABLE Postagem (
ID_Post INTEGER PRIMARY KEY,
ID_Usuario INTEGER,
ID_Categoria INTEGER,
Titulo VARCHAR(100),
Conteudo VARCHAR(500),
Data_Publicacao DATETIME,
FOREIGN KEY(ID_Usuario) REFERENCES Usuario (ID_Usuario),
FOREIGN KEY(ID_Categoria) REFERENCES Categoria (ID_Categoria)
);

CREATE TABLE Comentario (
ID_Comentario INTEGER PRIMARY KEY,
ID_Post INTEGER,
ID_Usuario INTEGER,
Conteudo VARCHAR(500),
Data_Comentario DATETIME,
FOREIGN KEY(ID_Usuario) REFERENCES Usuario (ID_Usuario),
FOREIGN KEY(ID_Post) REFERENCES Postagem (ID_Post)
);

CREATE TABLE Curtida (
ID_Curtida INTEGER PRIMARY KEY,
ID_Usuario INTEGER,
ID_Post INTEGER,
Data_curtida DATETIME,
FOREIGN KEY(ID_Usuario) REFERENCES Usuario (ID_Usuario),
FOREIGN KEY(ID_Post) REFERENCES Postagem (ID_Post)
);

CREATE TABLE Categoria (
ID_Categoria INTEGER PRIMARY KEY,
Nome_Categoria VARCHAR(50)
);
