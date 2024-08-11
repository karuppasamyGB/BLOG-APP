const express = require("express");
const Comment = require("../Models/Comment");
const router = express.Router();

router.post("/add", async (req, res) => {
  const { postId, user, comment } = req.body;
  try {
    const newComment = new Comment({ postId, user, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Unable to add comment" });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch comments" });
  }
});
router.delete("/:commentId", async (req, res) => {
  try {
    const result = await Comment.findByIdAndDelete(req.params.commentId);
    if (result) {
      res.status(200).json({ message: "Comment deleted successfully" });
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to delete comment" });
  }
});
router.put("/edit/:commentId", async (req, res) => {
  const { comment } = req.body; 

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      { comment },
      { new: true }
    );

    if (updatedComment) {
      res.status(200).json(updatedComment);
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
