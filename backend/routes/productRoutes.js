import express from 'express'
const router = express.Router()
import { getProducts, getProductById} from '../controllers/productController.js'

//Gets all products
router.route('/').get(getProducts)

//Gets product by ID
router.route('/:id').get(getProductById)

export default router