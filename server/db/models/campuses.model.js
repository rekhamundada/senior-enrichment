const Sequelize = require('sequelize');
const db = require('../index');

//* imageUrl - default value
const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
      validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "iim-ahmedabad.jpg"

  },
  description: {
    type: Sequelize.TEXT
  }
});
module.exports = Campuses;
