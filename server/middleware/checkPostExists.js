const Post = require('../models/post');

const checkPostExists = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    req.post = post;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = checkPostExists;
