const express = require('express');
const router = express.Router();
const productController = require('../../controllers/Product/productController');

router.post('/createProduct', productController.CreateProduct);
router.get('/selectallProduct', productController.SelectAllProduct);
router.get('/selectProduct/:id', productController.SelectProduct);
router.put('/updateProduct/:id', productController.UpdateProduct);
router.delete('/deleteProduct/:id', productController.DeleteProduct);

module.exports = router;