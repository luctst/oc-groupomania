const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const postsCtrl = require('../controllers/post');

router.get('/', postsCtrl.readPost);
router.post('/', multer.single('picture'), postsCtrl.createPost);
router.put('/:id', postsCtrl.updatePost);
router.delete('/:id', postsCtrl.deletePost);
router.patch('/like/:id', postsCtrl.likePost);


router.patch('/comment-post/:id', postsCtrl.commentPost);
router.patch('/edit-comment-post/:id', postsCtrl.editCommentPost);
router.patch('/delete-comment-post/:id', postsCtrl.deleteCommentPost)

module.exports = router;