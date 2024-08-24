import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { Box, TextField, Button, IconButton, Typography, Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";

const CommentForm = ({ postId, onCommentAdded, comments, setComments }) => {
  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to submit a comment.");
      return;
    }

    if (!user.username) {
      console.error("User object is missing the username property.");
      return;
    }

    try {
      await axios.post("https://blog11.onrender.com/api/comments/add", {
        postId,
        user: user.username,
        comment,
      });
      setComment("");
      onCommentAdded();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await axios.delete(`https://blog11.onrender.com/api/comments/${commentId}`);
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleCommentEdit = (commentId, commentText) => {
    setEditingCommentId(commentId);
    setEditingCommentText(commentText);
  };

  const handleCommentUpdate = async () => {
    try {
      await axios.put(`https://blog11.onrender.com/api/comments/edit/${editingCommentId}`, {
        comment: editingCommentText,
      });
      
      setComments(
        comments.map((comment) =>
          comment._id === editingCommentId
            ? { ...comment, comment: editingCommentText }
            : comment
        )
      );
      setEditingCommentId(null);
      setEditingCommentText("");
    } catch (error) {
      console.error("Error updating comment:", error.response ? error.response.data : error.message);
    }
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditingCommentText("");
  };

  return (
    <Box sx={{ mt: 3, p: 2, borderRadius: 2, backgroundColor: "#f5f5f5" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add a comment"
          fullWidth
          variant="outlined"
          margin="normal"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          rows={3}
          sx={{ backgroundColor: "#fff", borderRadius: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            borderRadius: 20,
            padding: "10px 20px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Submit
        </Button>
      </form>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Comments:</Typography>
        {comments.map((comment) => (
          <Card key={comment._id} sx={{ marginBottom: 2, borderRadius: 2 }}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
              }}
            >
              {editingCommentId === comment._id ? (
                <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={editingCommentText}
                    onChange={(e) => setEditingCommentText(e.target.value)}
                    multiline
                    rows={2}
                    sx={{ backgroundColor: "#fff", borderRadius: 2 }}
                  />
                  <IconButton
                    onClick={handleCommentUpdate}
                    color="primary"
                    sx={{ ml: 1 }}
                  >
                    <CheckIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleCancelEdit}
                    color="default"
                    sx={{ ml: 1 }}
                  >
                    <CancelIcon />
                  </IconButton>
                </Box>
              ) : (
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>{comment.user}</strong> said:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {comment.comment}
                  </Typography>
                </Box>
              )}
              {comment.userId === user.id && (
                <Box>
                  <IconButton
                    onClick={() => handleCommentEdit(comment._id, comment.comment)}
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleCommentDelete(comment._id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CommentForm;
