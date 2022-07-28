var express = require('express');
var router = express.Router();
const autoblogsCtrl = require('../controllers/autoblogs');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', isLoggedIn, autoblogsCtrl.index);
router.get('/new', isLoggedIn, autoblogsCtrl.new);
router.get('/:id', isLoggedIn, autoblogsCtrl.show);
router.post('/', isLoggedIn, autoblogsCtrl.create);

module.exports = router;
