
const express = require('express');
const router = new express.Router();
const Campuses = require('../db/models/campuses.model.js');

router.get('/', function (req, res, next) {
  Campuses.findAll()
        .then(function (found) {
          res.json(found);
        })
        .catch(next);
});

router.get('/:campusId', function (req, res, next) {
  Campuses.findById(req.params.campusId)
        .then(function (campus) {
          res.json(campus);
        })
        .catch(next);
});

router.post('/', function (req, res, next) {
  Campuses.create(req.body)
        .then(function (newCampus) {
          res.json(newCampus);
        })
        .catch(next);
});
// update campus //working
router.put('/:campusId', function (req, res, next) {
  Campuses.update(req.body, {
    where: {
      id: req.params.campusId
    },
    returning: true
  })
        .then(function (updated) {
          res.json(updated[1][0]);
        })
        .catch(next);
});

// delete campus
router.delete('/:campusId', function (req, res, next) {
  Campuses.destroy({
    where: {
    id: req.params.campusId
  }})
   .then(function (deletedCampus) {
    res.sendStatus(202);
    })
    .catch(next);
});

module.exports = router;
