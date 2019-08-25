const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool} = require('./config')

const app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ etended: true }))
app.use(cors())

const getQuote = (request, response) => {
    pool.query('SELECT * FROM pooquotes', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

app.route('/pooquotes').get(getQuote)

app.listen(process.env.PORT || 3002, () => {
    console.log('Server is up')
})