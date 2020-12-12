const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize , type)=>{
    return sequelize.Define('usuario', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement :true
        },
        nombre: type.STRING,
        email:Type.STRING,
        password :type.STRING,
        rol:type.STRING
    })
};