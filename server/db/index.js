'use strict';
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

console.log(chalk.yellow('Opening database connection'));

// create the database instance that can be used in other database files
const db = new Sequelize(`postgres://localhost:5432/senior-enrichment`, {
  logging: false // so we don't see all the SQL query made
});

// don't forget to run our models files and make all associations for our Sequelize objects (if you do it here consider circular references)

db.authenticate()
.then(() => {
  console.log(chalk.yellow('Connection has been established successfully.'));
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = db;

