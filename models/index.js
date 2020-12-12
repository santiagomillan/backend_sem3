const{ Sequelize } = require ('sequelize');
const UsuarioModelo = require('/usuarios');

const sequelize = new Sequelize('B9jkUmCgi8','B9jkUmCgi8' ,'xSc2UiaLKg' , {
  host: 'remotemysql.com',
  dialect:'mysql'
 // port:3306
  });

const  Usuarario= UsuarioModelo(sequelize,Sequelize);

  sequelize.sync({force : false})
    .then(()=>{
      console.log('tablas sincronizadas');
    });

    module.exports = {
      Usuarario
  }
