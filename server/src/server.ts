import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import connectDB from './utils/db'
import hospitalRouter from './resources/hospital/hospital.router'

const app = express()

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000

const allowedOrigins = ['http://localhost:1234']
const options: cors.CorsOptions = {
  origin: allowedOrigins,
}

app.disable('x-powered-by')

app.use(cors(options))
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/hospitals', hospitalRouter)

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`👟Server is running on port: ${port}`))

connectDB()
