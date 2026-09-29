const express = require('express')
const ProductModel = require('../models/products.model.js')
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/product.controllers.js')


const productRoutes = express.Router() // This helps you initialise routing


productRoutes.get('/getAll', getAllProducts)

//  Updated upstream
productRoutes.post('/create', createProduct)

productRoutes.put('/update/:id', updateProduct)

productRoutes.post('/create', async (req, res) => {
    const product = await ProductModel.create({
        product_name: req.body.product_name,
        price: req.body.price,
        ratings: req.body.ratings,
        isInStock: req.body.isInStock
    })

    res.send(product)
})
//  Stashed changes

productRoutes.delete('/delete/:id', deleteProduct)


module.exports = productRoutes