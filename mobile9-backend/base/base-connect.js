const Sequelize = require("sequelize");
const config = require('../config/base.config.json').database;
const sequelize = new Sequelize(config.name, config.user, config.password,{host: config.host, port:"2206",dialect: config.dialect});
module.exports = sequelize; 