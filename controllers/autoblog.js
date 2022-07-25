const Autoblog = require('../models/autoblog')

module.exports = {
    index, 
    new: newAutoblog,
    show,
    create
}

function show(req, res) {
    const auto = new Autoblog(req.body);
    res.render('autoblog/new', { auto });
}

function newAutoblog(req, res) {
    res.render('autoblog/index');
}

function index(req, res) {
    Autoblog.find({}, function(err, autoblog) {
        res.render('autoblog/index', { autoblog });
    });
}

function create(req, res) {
    console.log('create', req.body);
}