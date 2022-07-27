const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/:id', commentsCtrl.create);
router.delete('/:id', commentsCtrl.delete);
router.get('/:id/edit', commentsCtrl.edit)

module.exports = router;