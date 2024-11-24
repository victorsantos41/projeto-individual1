create database MSCS;
use MSCS;

create table usuario (
id int primary key auto_increment,
nome varchar(45),
email char(255),
senha varchar(45),
genero char(10),
idade int,
altura float
);

create table login (
idLogin int primary key auto_increment,
email char(255),
senha varchar(45),
fkUsuario int
);

