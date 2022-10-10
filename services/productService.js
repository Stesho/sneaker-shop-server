import db from '../db.js';

class ProductService {
  async createProduct(product) {
    const {sku, imgUrls, brand, model, price, gender, sizes, description, style} = product;
    const newProduct = await db.query(
      `INSERT INTO product (sku, img_urls, brand, model, price, gender, sizes, description, style)
      VALUES (${sku}, ARRAY ${JSON.stringify(imgUrls).replace(/"/gi, "'")}, '${brand}', '${model}', ${price}, '${gender}', ARRAY [${sizes}], '${description}', '${style}') RETURNING *`
    );
    return newProduct.rows[0];
  }

  async getAllProducts() {
    const products = await db.query('SELECT * FROM product');
    return products.rows;
  }
}

export default new ProductService();
