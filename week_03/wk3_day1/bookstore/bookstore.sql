-- Author
-- - name
-- - age
--
-- Book
-- -title
-- -price
-- -Author

DROP TABLE Author;

DROP TABLE Book;

CREATE TABLE Author(
  name VARCHAR(255),
  age INT,
);

INSERT INTO Author(name, age)

VALUES ('Marian Keys', 45);
INSERT INTO Author(name, age)
VALUES ('JK Rowling', 55,);

SELECT * from Author;

CREATE TABLE Book(
  author VARCHAR(255),
  title VARCHAR(255),
  price INT
);


INSERT INTO Book(author, title, price)
VALUES ('Marian Keyes','Watermelon', 6);
INSERT INTO Book(author, title, price)
VALUES ('Marian Keyes', 'Rachels Holiday', 10);
INSERT INTO Book(author, title, price)
VALUES ('JK Rowling', 'Harry Potter Half Blood Stone',12);
INSERT INTO Book(author, title, price)
VALUES ('JK Rowling', 'Harry Potter and the goblet of Fire',13);

SELECT * from Book;
