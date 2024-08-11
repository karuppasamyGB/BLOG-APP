import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions, Skeleton, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3500/api/blog/posts");
        setPosts(response.data); 
      } catch (error) {
        console.error("Error fetching posts", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/api/blog/delete/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  return (
    <Grid container spacing={3} padding={3}>
      {loading ? (
        Array.from(new Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <Skeleton variant="rectangular" height={140} />
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Skeleton variant="text" height={24} width="80%" />
                <Skeleton variant="text" height={16} width="60%" />
              </CardContent>
              <CardActions>
                <Skeleton variant="text" width={60} height={30} />
                <Skeleton variant="text" width={60} height={30} />
                <Skeleton variant="text" width={60} height={30} />
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="140" 
                image={post.thumbnail}
                alt={post.title}
                sx={{
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  flex: 1, 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.desc}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  size="small"
                  color="success"
                  component={Link}
                  to={`/post/${post._id}`}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    },
                  }}
                >
                  Read More
                </Button>
                <div>
                  <IconButton
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/edit/${post._id}`}
                    sx={{
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDelete(post._id)}
                    sx={{
                      '&:hover': {
                        color: 'error.main',
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Home;
