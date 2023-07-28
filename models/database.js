const Sequelize = require('sequelize');
const DataTypes = require('sequelize');

const sequelize = new Sequelize('affordable','root','Ihatenaveensingh@123',{
    host:'localhost',
    dialect:'mysql'

});

const Form = sequelize.define('Form',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    }

});
sequelize.sync().then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})
module.exports = Form;