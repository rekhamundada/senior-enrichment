'use strict';
const db = require('./server/db/models');
const app = require('./server');
const PORT = 1337;

const models = require('./server/db/models')
// const Students = models.Campuses;
// const Campuses = models.Campuses;
//{force: true}
db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced');
  app.listen(PORT, () => console.log(`studiously serving silly sounds on port 1337`));
});


