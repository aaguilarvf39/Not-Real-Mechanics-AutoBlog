const Autoblog = require('../models/autoblog')

module.exports = {
    index, 
    new: newStyle
}

function newStyle(req, res) {
    res.render('autoblog/style');
}

function index(req, res) {
    Autoblog.find({}, function(err, autoblog) {
        res.render('autoblog/index', { autoblog });
    });
}