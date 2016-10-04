var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var custValidator = [
                    function(val){
                        return val.length>0 && val.toLocaleLowerCase() != 'none' ;
                    },
        'You must select a team member name'
];

var requiredStringValidator = [
                    function(val){
                        return val.trim().length>0 ;
                    },
        '{path} can not be left empty'
];



var standupSchema = new Schema({
    memberName: {type: String, required: true, validate: custValidator},
    project: {type: String, required: true, validate: requiredStringValidator} ,
    workYesterday: {type: String, required: true, validate: requiredStringValidator},
    workToday: {type: String, required: true, validate: requiredStringValidator},
    impediment: {type: String, required: true, default: 'none'},
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('StandUp', standupSchema);