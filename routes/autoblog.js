var express = require('express');
var router = express.Router();
const autoblogCtrl = require('../controllers/autoblog');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', autoblogCtrl.index);
router.get('/new', autoblogCtrl.new);


module.exports = router;
