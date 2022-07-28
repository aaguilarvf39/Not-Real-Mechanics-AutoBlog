const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
var isLoggedIn = require('../config/auth');

router.post('/:id', isLoggedIn, commentsCtrl.create);
router.delete('/:id',isLoggedIn, commentsCtrl.delete);
router.get('/:id/edit', isLoggedIn, commentsCtrl.edit);
router.put('/:aid/comments/:cid', isLoggedIn, commentsCtrl.update);

module.exports = router;