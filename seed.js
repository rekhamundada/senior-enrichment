const Promise = require('bluebird');
const {db, Campuses, Students} = require('./server/db/models');


const campuses = [
  {name: "FastTrack Academy", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png", description: "FastTrack Academy is a community college"},
  {name: "GraceHopper Academy", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71HXqFTPqDL._SX522_.jpg", description: "This State Community College is a two-year accredited, state-supported, commuter college "},
  {name: "FerMont Academy", imgUrl: "http://media.graytvinc.com/images/400*320/Del+Rio+Rams.pngf", description: "FerMont Academy, an academic community rooted in the Christian faith, challenges and equips students to pursue intellectual, spiritual, and personal growth through an education."},
  {name: "MiddleSex Academy", imgUrl: "https://collegekhabri.com/data/shri-ram-institute-of-technology-logo.jpg", description: "MiddleSex Academy is a College where high school students as early as seventh grade participate in a combined high school and college experience with the goal of earning a high school and a college associate degree at the same time."},
];

const students = [
    {firstName: "Jacob", lastName:"Jason", email: "jacob@xyz.com", gpa: 3.9, campusId: 1},
    {firstName: "Richa", lastName: "Sharma",email: "richin@xyz.com", gpa: 3.1, campusId: 3},
    {firstName: "Mirella", lastName: "Jacob", email: "mirella@xyz.com", gpa: 3.0, campusId: 2},
    {firstName: "Shiva", lastName: "Sinha", email: "shiva@xyz.com", gpa: 3.9, campusId: 2},
    {firstName: "Zeneb", lastName: "John", email:"zeneb@xyz.com", gpa: 2.3, campusId: 4},

  ]

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campuses.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Students.create(student)

  )
  ));

  const createCampuses = () => {
    return Promise.all(campuses.map(campusData => {
      return Campuses.create(campusData);
    }));
  };
  const main = () => {
    console.log('Syncing db..')
    db.sync({ force: true })
      .then(() => {
        console.log('Seeding database..')
        return seed();
      })
      .catch(err => {
        console.log('Error while seeding')
        console.log(err.stack);
      })
      .then(() => {
        db.close()
        return null
      });
  };

  main()
