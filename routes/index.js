var express = require('express');
var router = express.Router();
var standUpCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/newnote', function(req, res){
            return standUpCtrl.getNote(req, res);
});

router.post('/newnote', function(req, res){
            return standUpCtrl.create(req, res);
});

router.get('/find/:name', function(req, res){
            return standUpCtrl.find(req, res);
})

module.exports = router;
