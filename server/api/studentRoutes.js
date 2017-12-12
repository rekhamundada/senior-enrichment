const router = require('express').Router();
const Students = require('../db/models/students.model.js');

router.get('/', function(req, res, next){
  Students.findAll()
  .then(function(foundStudents){
    res.json(foundStudents);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  Students.findById(req.params.id)
    .then(function (student) {
      res.json(student);
    })
    .catch(next);
});
router.post('/', function (req, res, next) {
  Students.create(req.body)
    .then(function (newStudents) {
      res.json(newStudents);
    })
    .catch(next);
});
router.put('/:id', function (req, res, next) {
  Students.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
   .then(function (updated) {
     res.json(updated[1][0]);
    })
    .catch(next);
});

router.delete('/:id', function (req, res, next) {
  Students.destroy({
    where:
    {
    id: req.params.id
    }
  })
   .then(function (deletedStudents) {
     res.json(deletedStudents);
  })
  .catch(next);
});

module.exports = router;

