const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getQuote = (request, response) => {
    pool.query('SELECT * FROM pooquotes', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

app.route('/pooquote').get(getQuote)

app.listen(process.env.PORT || 3002, () => {
    console.log('Server is up')
})