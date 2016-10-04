var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var custValidator = [
                    function(val){
                        return val.length >0 ;
                    },
        'Hello! we got validatuion error!'
]

var standupSchema = new Schema({
    memberName: {type: String, validate: custValidator},
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('StandUp', standupSchema);