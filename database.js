const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("petshop", "postgres", "anujmani", {
    port: 5432,
    dialect: 'postgres'
})


sequelize.authenticate().then(()=>{
    console.log("Connected")
})
.catch((err)=> {
    console.log("Error", err)
})


module.exports = sequelize