import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import errorHandler from './middleware/errorMiddleware.js'


dotenv.config()
const app = express()
connectDB()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.json({ message: "API is Running!" })
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})