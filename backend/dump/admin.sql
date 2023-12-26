CREATE DATABASE usersystem;
USE usersystem;

    CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NULL,
    lastName VARCHAR(255) NULL,
    age_student VARCHAR(255) NULL,
    date_register VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    foto VARCHAR(255) DEFAULT 'nofoto.jpg',
    username VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    userRole VARCHAR(255) NULL
);

INSERT INTO `Estudiantes` ( `firstName`, `lastName`, `age_student`, `email`, `foto`, `username`, `password`, `userRole`) VALUES ('admin', 'admin', '0', 'mail@mail.com', 'nofoto.jpg', 'admin', 'admin123', 'admin');

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; 
FLUSH PRIVILEGES;

ALTER USER 'root'@'localhost' IDENTIFIED BY 'rd#T453%' PASSWORD EXPIRE NEVER;
FLUSH PRIVILEGES;

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'rd#T453%';
FLUSH PRIVILEGES;