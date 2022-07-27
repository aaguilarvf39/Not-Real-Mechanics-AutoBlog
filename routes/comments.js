const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/:id', commentsCtrl.create);
router.delete('/:id', commentsCtrl.delete);
router.get('/comments/:id/edit', commentsCtrl.edit);
router.put('/comments/:id', commentsCtrl.update);

module.exports = router;