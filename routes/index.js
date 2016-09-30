var express = require('express');
var router = express.Router();
var standUpCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res) {
  return standUpCtrl.list(req, res);
    
});

router.post('/', function(req, res) {
    console.log('posted');
  return standUpCtrl.filterBy(req, res);
})




router.get('/newnote', function(req, res){
            return standUpCtrl.getNote(req, res);
});



router.post('/newnote', function(req, res){
            return standUpCtrl.create(req, res);
});

router.get('/find/:name', function(req, res){
            return standUpCtrl.find(req, res);
});

router.get('/update/:name', function(req, res){
            return standUpCtrl.update(req, res);
});


router.get('/remove/:name', function(req, res){
            return standUpCtrl.remove(req, res);
})

module.exports = router;
