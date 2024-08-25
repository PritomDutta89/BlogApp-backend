import Post from "../models/Post.js";

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get a single post by ID
// GET /posts/:id
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create a new post
// POST /posts
const createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      cardSummary: req.body.cardSummary,
      imageURL: req.body.imageURL,
    });
    const newPost = await post.save();
    res.status(201).json({ success: true, message: "Post created" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Update a post
// PUT /posts/:id
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.imageURL = req.body.imageURL || post.imageURL;
    const updatedPost = await post.save();
    res.json({ success: true, message: "Post updated" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete a post
// DELETE /posts/:id
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await Post.deleteOne({ _id: req.params.id });
    res.json({ success: true, message: "Post removed" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export { getPosts, getPostById, createPost, updatePost, deletePost };
