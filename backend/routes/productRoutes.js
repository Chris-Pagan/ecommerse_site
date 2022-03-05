import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

//Gets all products
router.get('/', asyncHandler(async (req, res) =>{
    const products = await Product.find({})
    res.json(products)
}))

//Gets product by ID
router.get('/:id', asyncHandler(async (req, res) =>{
    const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        res.status(404).json({message: 'Product is not found'})
    }
}))

export default router