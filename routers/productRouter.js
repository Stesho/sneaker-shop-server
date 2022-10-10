import Router from 'express';
import productController from '../controllers/productController.js';

const router = new Router();

router.post('/product', productController.createProduct);
router.get('/product', productController.getAllProducts);
// router.put('/product/:id', productController.getProduct);
// router.put('/product/:id', productController.updateProduct);
// router.delete('/user/:id', productController.deleteProduct);

export default router;