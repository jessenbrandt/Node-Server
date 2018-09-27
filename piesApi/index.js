require ('dotenv').config();

const express = require('express');
const app = express();

const pie = require('./controllers/piecontroller')
const user = require('./controllers/usercontroller')
const sequelize = require('./db')
sequelize.sync()
// sequelize.sync({force: true})
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(require('./middleware/headers'))

app.use(express.static(__dirname + '/public'))
console.log(__dirname)

app.get('/', (req, res) => res.render('index'))

app.use('/pies', pie)
app.use('/auth', user)

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT} `)) 
//CallBack Function = a function that is called in a function
//.listen is a method