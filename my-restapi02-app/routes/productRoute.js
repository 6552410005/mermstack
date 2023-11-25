const express = require('express')
const productController = require('./../controllers/productController');

const router = express.Router()

router.post('/product',productController.insertProductCtrl)

router.get('/product',productController.getAllProductCtrl)

router.put('/product',productController.updateProductCtrl)

router.delete('/product',productController.deleteProductCtrl)

module.exports = router