import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 5000

const allowedOrigins = ['http://localhost:3000']
const options: cors.CorsOptions = {
  origin: allowedOrigins,
}
app.disable('x-powered-by')

app.use(cors(options))
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/data', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => console.log(`👟Server is running on port: ${port}`))
