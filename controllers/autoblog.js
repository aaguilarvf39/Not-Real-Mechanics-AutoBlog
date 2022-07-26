const Autoblog = require('../models/autoblog')

module.exports = {
    index, 
    new: newAutoblog,
    show,
    create
}

function index(req, res) {
    Autoblog.find({}, function(err, autoblog) {
      res.render('autoblog/index', { title: 'All Money Pits', autoblog });
    });
  }
  
  function show(req, res) {
    Autoblog.findById(req.params.id)
      .exec(function(err, autoblog) {
            res.render('autoblog/show', {
              title: 'Autoblog Detail'
          });
      });
  }
  
  function newAutoblog(req, res) {
    res.render('autoblog/new', { title: 'Add Money' });
  }
  
  function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing;
    var autoblog = new Autoblog(req.body);
    autoblog.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/autoblog/new');
      res.redirect(`/autoblog/${autoblog._id}`);
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