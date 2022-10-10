import productService from '../services/productService.js';

// TODO: rewrite statuses

class ProductController {
  async createProduct(req, res) {
    try {
      const product = await productService.createProduct(req.body);
      console.log(product);
      return res.json({product, message: 'New product created'});
    }
    catch(err) {
      return res.status(400).json({message: 'Create product error'});
    }
  }

  async getAllProducts(req, res) {
    try{
      const products = await productService.getAllProducts();
      return res.json(products);
    }
    catch(err) {
      return res.status(400).json({message: 'Get products error'});
    }
  }
}

export default new ProductController();
