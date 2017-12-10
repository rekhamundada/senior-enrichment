'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!
// This is also probably a good place for you to set up your association

const db = require('../index.js');
const Campuses = require('./campuses.model');
const Students = require('./students.model');

Campuses.hasMany(Students, {onDelete: 'cascade', hooks: true});
Students.belongsTo(Campuses);

module.exports = db;
