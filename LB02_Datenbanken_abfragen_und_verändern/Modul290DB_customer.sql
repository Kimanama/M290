create table customer
(
    id         int auto_increment
        primary key,
    firstName  varchar(50) not null,
    lastName   varchar(50) not null,
    username   varchar(50) not null,
    number     varchar(50) not null,
    email      varchar(25) not null,
    password   varchar(50) not null,
    registered datetime    not null
)
    charset = utf8;

INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (2, 'Emma', 'Sutter', 'emmisu', '+41755893851', 'emmasu@gmail.com', 'Sonne3000', '2022-01-24 09:42:13');
INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (3, 'Mai', 'Mangtshang', 'Kimanama ', '+41788500467', 'mangtshangk@bzz.ch', 'Hello1234', '2022-01-24 09:43:27');
INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (4, 'Mai', 'Mangtshang', 'Kimanama ', '+41788500467', 'mangtshangk@bzz.ch', 'Hello1234', '2022-01-24 09:43:28');
INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (5, 'Salome', 'Ruetsche', 'salorue', '+41794036218', 'salome.ruetsche@gmx.ch', 'hallo1234', '2022-01-24 09:44:18');
INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (6, 'Justin', 'Maier', 'justin03', '+41783024591', 'justin.meiert@gmail.com', 'Cars4life', '2022-01-24 09:45:10');
INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (7, 'Nuria', 'Sommer', 'nuriso', '+41760384951', 'nuriasommer@gmail.com', 'lassmichrein123', '2022-01-24 09:46:31');
INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (8, 'Emil', 'Glaser', 'emilogla', '+41794873904', 'glaser.emil@gmx.ch', 'ksnengv394', '2022-01-24 09:48:42');
INSERT INTO Modul290DB.customer (id, firstName, lastName, username, number, email, password, registered) VALUES (9, 'Emil', 'Glaser', 'emilogla', '+41794873904', 'glaser.emil@gmx.ch', 'ksnengv394', '2022-01-24 09:48:43');