CREATE TABLE account(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE product(
  id SERIAL PRIMARY KEY,
  sku INTEGER NOT NULL,
  img_urls VARCHAR(255)[] NOT NULL,
  brand VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  gender VARCHAR(255) NOT NULL,
  sizes INTEGER[] NOT NULL,
  description TEXT,
  style VARCHAR(255) NOT NULL
);

CREATE TABLE test(
  id SERIAL PRIMARY KEY,
  urls VARCHAR(255)[] NOT NULL
);
