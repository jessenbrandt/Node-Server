require('dotenv').config();

const Sequelize = require('sequelize')// New version of the class Sequelize
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
}); 

sequelize.authenticate()
.then( () => console.log('postres db is connected'))
.catch(err => console.log(err))

module.exports = sequelize