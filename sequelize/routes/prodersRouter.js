const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

const router = require('express').Router()


// product routers

router.get('/product', productController.getAllProducts)

router.post('/product', productController.addProduct)

router.get('/product/:id', productController.getOneProduct)

router.put('/product/:id', productController.updateProduct)

router.delete('/product/:id', productController.deleteProduct)


// order routes

router.get('/order', orderController.getAllOrders)

router.post('/order', orderController.addOrder)

router.get('/order/:id', orderController.getOneOrder)

router.put('/order/:id', orderController.updateOrder)

router.delete('/order/:id', orderController.deleteOrder)





module.exports = router;
