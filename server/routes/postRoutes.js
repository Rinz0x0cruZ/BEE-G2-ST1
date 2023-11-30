const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:postId', checkPostExists, postController.getPostById);
router.put('/:postId', checkPostExists, postController.updatePost);
router.delete('/:postId', checkPostExists, postController.deletePost);


module.exports = router;

