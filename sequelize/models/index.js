const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    "sequelize",
    "root",
    "Dheeraj@4024", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false,
    }
)



sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error',+ err)
})


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.ProductM = require('./productModel.js')(sequelize, DataTypes)
db.OrderM = require('./orderModel.js')(sequelize, DataTypes)
// db.User = require('./userModel.js')(sequelize, DataTypes)


db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db;
