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
    defaultValue: "http://visitosu.oregonstate.edu/sites/visitosu.oregonstate. edu/files/20150417_ettihad_ho3977.jpg"

  },
  description: {
    type: Sequelize.TEXT
  }
});
module.exports = Campuses;
