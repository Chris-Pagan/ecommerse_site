import express from 'express'
import dotenv from'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler } from './middleware/errorHandler.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

connectDB();

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`))
