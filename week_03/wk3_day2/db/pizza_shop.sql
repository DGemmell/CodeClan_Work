DROP TABLE IF EXISTS pizza_order;

CREATE TABLE pizza_order(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  quantity INT,
  topping VARCHAR(255)



);
