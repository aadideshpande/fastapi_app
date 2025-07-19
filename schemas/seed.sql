-- seed.sql

-- Insert test users
INSERT INTO users (name, email) VALUES
('Alice Johnson', 'alice@example.com'),
('Bob Smith', 'bob@example.com'),
('Charlie Lee', 'charlie@example.com');

-- Insert test orders
INSERT INTO orders (user_id, product, quantity, price) VALUES
(1, 'Wireless Mouse', 2, 19.99),
(1, 'Keyboard', 1, 49.99),
(2, 'Laptop Stand', 1, 39.99),
(3, 'USB-C Hub', 3, 29.99);
