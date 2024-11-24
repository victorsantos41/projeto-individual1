use MSCS;

create table login (
idLogin int primary key auto_increment,
email char(255),
senha varchar(45),
fkUsuario int
);

select * from usuario;
select * from login;

truncate usuario;
truncate login;







