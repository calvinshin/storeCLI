DROP DATABASE IF EXISTS store_db;

CREATE DATABASE store_db;

USE store_db;

CREATE TABLE items (
    item_id INT NOT NULL auto_increment,
    product_name VARCHAR(100),
    department_name VARCHAR(30),
    price DECIMAL(15,2),
    stock_quantity INT DEFAULT 1,
    prod_version VARCHAR(30),
    description VARCHAR(1000),
    PRIMARY KEY(item_id)
);

INSERT INTO items (product_name, department_name, price, stock_quantity, prod_version, description)
VALUES ("Goldfish Snacks", "Food", 2.29, 40, "", "The snack that smiles back!"),
    ("Lenovo Laptop", "Technology", 930.25, 1, "T440s", "A decent laptop for business use"),
    ("Gold Coin", "Collectibles", 40, 10, "", "A random gold coin. Where did it come from? Not guaranteed to be gold."),
    ("Protein Bars", "Food", 4.22, 30, "", "A great boost to your macros with a hearty dose of protein!"),
    ("Pixel 1", "Technology", 400.25, 1, "", "A technologically groundbreaking product at the time, the Pixel 1 still takes amazing photos."),
    ("Gatsby MOVING RUBBER", "Beauty", 10.44, 10, 5063, "A stiff hard wax for hair."),
    ("Water", "Food", 17.20, 1, "", "A rare bottle of water collected from a mysterious and sacred source."),
    ("Costume Rings x10", "Fashion", 5, 20, "", "An assortment of costume rings to bedazzle all audiences."),
    ("AOL CD", "Software", 99.99, 24, "1.5.62", "Helping you get access to the internet through your home phone!"),
    ("Pen", "Office Supplies", .99, 100, "", "Bic pen");

CREATE TABLE accounts (
    id INT NOT NULL auto_increment,
    username VARCHAR(30),
    password VARCHAR(30),
    type VARCHAR(30),
    PRIMARY KEY(id)
);

INSERT INTO accounts (username, password, type)
VALUES ("Customer", "password", "customer"),
    ("Manager", "password", "manager"),
    ("Supervisor", "password", "supervisor");;