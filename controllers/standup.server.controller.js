var standUp = require('../models/standup.server.model.js');

module.exports.create = function(req, res){
    
    console.log(req.body);
    var entry = new standUp({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });
    
    entry.save();
    
    //redirect
    
    res.redirect(301, '/');
};

exports.find = function(req, res){
    console.log("Log data: " + req.params.name);
    var feed = {memberName: req.params.name}
    standUp.findById('57ec2b85ba7e8923ccc42993', 'memberName project', function(err, results){
        console.log(results);
        res.send(results);
    });
};

module.exports.getNote = function(req, res){
    res.render('newNote', {title: 'StandUp - Notes'});
};