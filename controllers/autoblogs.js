const Autoblog = require('../models/autoblog')

module.exports = {
    index, 
    new: newAutoblog,
    show,
    create
}

function index(req, res) {
    Autoblog.find({}, function(err, autoblogs) {
      res.render('autoblogs/index', { title: 'Money Pits', autoblogs });
    });
  }
  
  function newAutoblog(req, res) {
    res.render('autoblogs/new', { title: 'New Pit' });
  }
  
  function show(req, res) {
    Autoblog.findById(req.params.id)
      .exec(function(err, autoblog) {
            res.render('autoblogs/show', {
              title: 'Autoblog Detail'
          });
      });
  }
  
  function create(req, res) {
    var autoblog = new Autoblog(req.body);
    autoblog.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/autoblogs/new');
      res.redirect(`/autoblogs/${autoblog._id}`);
    });
  }
  







// function show(req, res) {
//     const auto = new Autoblog(req.body);
//     res.render('autoblog/new', { auto });
// }

// function newAutoblog(req, res) {
//     res.render('autoblog/new');
// }

// function index(req, res) {
//     Autoblog.find({}, function(err, autoblog) {
//         res.render('autoblog/index', { autoblog });
//     });
// }

// function create(req, res) {
//         res.redirect('/autoblog');
// }