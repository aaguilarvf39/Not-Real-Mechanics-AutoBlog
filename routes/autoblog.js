var express = require('express');
var router = express.Router();
const autoblogCtrl = require('../controllers/autoblog');
const isLoggedIn = require('../config/auth');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', autoblogCtrl.index);
router.get('/new', autoblogCtrl.new);
router.get('/:id', autoblogCtrl.show);
router.post('/', autoblogCtrl.create);

module.exports = router;
