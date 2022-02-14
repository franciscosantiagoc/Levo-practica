require('dotenv').config();
const modelMessage = require('./models/Message')
const { Sequelize } = require('sequelize');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

let sequelize =new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
); //definiendo datos de la base de datos a conectar
sequelize.authenticate().then(()=>console.log('conexion exitosa')).catch(e=>console.log('conexion fallida',e))

modelMessage(sequelize)

module.exports = {
  conn: sequelize, //se exporta la conexion
  ...sequelize.models
};