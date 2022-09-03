import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

const PORT = process.env.PORT
const url = process.env.CONNECTION_URL
mongoose
  .connect(url)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`))
