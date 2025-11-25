import express from 'express'
import route from './Routes/Routes.js'
const app = express()

const PORT = 8080

const a = (req, res) => { res.send({ name: "fdsfs", age: 44 }) }

app.use('/', route)


app.listen(PORT, () => console.log('Server is Running Port = ', PORT))