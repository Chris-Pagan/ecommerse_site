import express from 'express'
import dotenv from'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler } from './middleware/errorHandler.js'
import { application } from 'express'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

connectDB();


app.use(express.json())
app.get('/', (req, res) => {
    res.send('API is running...')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)

app.use(errorHandler)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`))
