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
    
    entry.save(function(err){    
        if(err)
        {
            console.log(err);
        }
        else
            console.log('Person saved');
    });
    
    //redirect
    
    res.redirect(301, '/');
};

exports.list = function(req, res){
  var query = standUp.find();
    
    query.sort({createdOn: 'desc'})
        .limit(12)
        .exec(function(err, results){
        
        res.render('index', {title: 'Home Page', notes: results});
    });
};

exports.filterBy = function(req, res){
  var query = standUp.find();
    
    var filter = req.body.memberName;
    
    if(filter.length > 0)
        {
            query.where({memberName: filter});
        }
    
    query.sort({createdOn: 'desc'})
        .limit(12)
        .exec(function(err, results){
        
        res.render('index', {title: 'Home Page', notes: results});
    });
};

exports.find = function(req, res){
    console.log("Log data: " + req.params.name);
    var feed = {memberName: {$gte: 10, $lte: 20}};
    standUp.findOne(feed, 'memberName project', function(err, results){
        console.log(results);
        res.send(results);
    });
};

exports.update = function(req, res){
    console.log("Log data: " + req.params.name);
    var feed = {memberName: req.params.name};
    var updateData = {impediment: "new impediment"};
    var options = {multi: true};
    standUp.update(feed, updateData, options, function(err, rowsAffected, rawResponse){
        console.log(rowsAffected);
        console.log(rawResponse);
        res.send("Rows affected: " + rowsAffected.nModified+ " Raw response: " + rawResponse);
    });
};

exports.remove = function(req, res){
    console.log("Log data: " + req.params.name);
    var gteDate = new Date(2014, 10, 31);
    var feed = {memberName: req.params.name, createdOn: {$gte: gteDate}};
    standUp.remove(feed, function(err){
        res.send("Data removed with name: " + req.params.name);
    });
};

module.exports.getNote = function(req, res){
    res.render('newNote', {title: 'StandUp - Notes'});
};