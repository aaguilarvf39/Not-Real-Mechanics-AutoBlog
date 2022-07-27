const Autoblog = require('../models/autoblog');

module.exports = {
  create,
  delete: deleteComment,
  edit,
  update
};

function edit(req, res) {
  Autoblog.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, car) {
    if (err || !autoblog) return res.redirect('/autoblog');
    console.log(autoblog)
    res.render('autoblogs/edit', {car});
  });
}

function update(req,res) {
  res.render('/autoblogs/:id', {title: 'Autoblog' });
}


async function deleteComment(req, res, next) {
  try {
    const autoblog = await Autoblog.findOne({'comments._id': req.params.id, 'comments.user': req.user._id});
    if (!autoblog) throw new Error('Not today!');
    autoblog.comments.remove(req.params.id);
    await autoblog.save();
    res.redirect(`/autoblogs/${autoblog._id}`);
  } catch (err) {
    return next(err);
  }
}

function create(req, res) {
  // The new review will be embedded in the movie doc
  Autoblog.findById(req.params.id, function(err, autoblog) {
    console.log(req.user._id, 'create function');
    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    autoblog.comments.push(req.body);
    console.log(autoblog.comments);
    autoblog.save(function(err) {
      // Step 5: Data has been changed
      // so we redirect
      res.redirect(`/autoblogs/${autoblog._id}`);
    });
  });
}