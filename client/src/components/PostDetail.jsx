import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Typography,Container,Card,CardContent,CardMedia,Box} from "@mui/material";
import CommentForm from "./CommentForm";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://blog11.onrender.com/api/blog/posts/${id}`
      );
      setPost(response.data);
    } catch (err) {
      setError("Post not found");
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://blog11.onrender.com/api/comments/${id}`
      );
      setComments(response.data);
    } catch (err) {
      console.error("Error fetching comments", err);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const handleCommentAdded = () => {
    fetchComments();
  };

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error}</Typography>;
  }

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          padding: "10px",
        }}
      >
        <Card sx={{ width: "100%", maxWidth: 400, height: "auto" }}>
          <CardMedia
            component="img"
            image={post.thumbnail}
            alt={post.title}
            sx={{
              height: 150, 
              width: "100%",
              objectFit: "contain",
            }}
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2">{post.desc}</Typography>
            <Typography variant="body1" color="text.secondary" marginTop={2}>
              Category: {post.category}
            </Typography>
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h7" gutterBottom>
                Comments
              </Typography>
              {comments.map((comment) => (
                <Box
                  key={comment._id}
                  sx={{
                    marginBottom: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {comment.user} said:
                    </Typography>
                    <Typography variant="body2">{comment.comment}</Typography>
                  </Box>
                </Box>
              ))}
              <CommentForm postId={id} onCommentAdded={handleCommentAdded} comments={comments} setComments={setComments} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default PostDetail;
