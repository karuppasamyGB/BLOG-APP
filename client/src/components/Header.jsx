import React, { useState, useEffect, useContext } from "react";
import { Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Avatar, Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logoo from "../images/blog.png";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import DragHandleIcon from '@mui/icons-material/DragHandle';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { user, logout } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.username);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, [user]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ width: 250 }}>
      <List>
        {isLoggedIn && (
          <>
            <ListItem>
              <Avatar sx={{ 
                bgcolor: 'transparent', 
                borderRadius: '50%', 
                width: 40, 
                height: 40, 
                ml: 2, 
                background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
                color: 'white',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {userName.charAt(0)}
              </Avatar>
              <ListItemText primary={userName} sx={{ ml: 2 }} />
            </ListItem>
            <Divider />
          </>
        )}
        <ListItem
          button
          sx={{
            background: 'linear-gradient(45deg, #FF8C00 30%, #FFA500 90%)', 
            color: "white",
            fontFamily: "Roboto, sans-serif",
            "&:hover": {
              background: 'linear-gradient(45deg, #FFA500 30%, #FF8C00 90%)',
            },
          }}
          component={Link}
          to="/create-blog"
        >
          <ListItemText primary="Create Blog" />
        </ListItem>
        {isLoggedIn ? (
          <ListItem
            sx={{
              background: 'linear-gradient(45deg, #00CED1 30%, #20B2AA 90%)', 
              color: "white",
              fontFamily: "Roboto, sans-serif",
              "&:hover": {
                background: 'linear-gradient(45deg, #20B2AA 30%, #00CED1 90%)',
              },
              mt: 2,
            }}
            button
            onClick={logout}
          >
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <>
            <ListItem
              button
              sx={{
                background: 'linear-gradient(45deg, #FF8C00 30%, #FFA500 90%)',
                color: "white",
                fontFamily: "Roboto, sans-serif",
                "&:hover": {
                  background: 'linear-gradient(45deg, #FFA500 30%, #FF8C00 90%)',
                },
              }}
              component={Link}
              to="/register"
            >
              <ListItemText primary="Register Now" />
            </ListItem>
            <ListItem
              button
              sx={{
                background: 'linear-gradient(45deg, #00CED1 30%, #20B2AA 90%)',
                color: "white",
                fontFamily: "Roboto, sans-serif",
                "&:hover": {
                  background: 'linear-gradient(45deg, #20B2AA 30%, #00CED1 90%)',
                },
                mt: 1,
              }}
              component={Link}
              to="/login"
            >
              <ListItemText primary="Login" />
            </ListItem>
          </>
        )}
      </List>
    </div>
  );

  return (
    <header
      style={{
        backgroundColor: theme.palette.background.paper,
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <DragHandleIcon />
        </IconButton>
      )}
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
          color: theme.palette.text.primary,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <img
          src={logoo}
          alt="Logo"
          style={{ height: "30px", marginRight: "10px" }}
        />
        BLOG LIST
      </Typography>
      {!isMobile && (
        <>
          {isLoggedIn ? (
            <>
              <Avatar 
                sx={{ 
                  bgcolor: 'transparent', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40, 
                  ml: 2, 
                  background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {userName.charAt(0)}
              </Avatar>
              <Button
                color="inherit"
                component={Link}
                to="/create-blog"
                sx={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(45deg, #FF8C00 30%, #FFA500 90%)', 
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  ml: 2,
                  borderRadius: '20px',
                  "&:hover": {
                    background: 'linear-gradient(45deg, #FFA500 30%, #FF8C00 90%)',
                    border: '2px solid #FF8C00',
                  },
                }}
              >
                Create New Blog
              </Button>
              <Button
                color="inherit"
                onClick={logout}
                sx={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(45deg, #00CED1 30%, #20B2AA 90%)', 
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  ml: 2,
                  borderRadius: '20px',
                  "&:hover": {
                    background: 'linear-gradient(45deg, #20B2AA 30%, #00CED1 90%)',
                    border: '2px solid #00CED1',
                  },
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/register"
                sx={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(45deg, #FF8C00 30%, #FFA500 90%)',
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  borderRadius: '20px',
                  "&:hover": {
                    background: 'linear-gradient(45deg, #FFA500 30%, #FF8C00 90%)',
                    border: '2px solid #FF8C00',
                  },
                }}
              >
                Register Now
              </Button>
              <Button
                component={Link}
                to="/login"
                sx={{
                  border: '2px solid transparent',
                  background: 'linear-gradient(45deg, #00CED1 30%, #20B2AA 90%)',
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  ml: 2,
                  borderRadius: '20px',
                  "&:hover": {
                    background: 'linear-gradient(45deg, #20B2AA 30%, #00CED1 90%)',
                    border: '2px solid #00CED1',
                  },
                }}
              >
                Login
              </Button>
            </>
          )}
        </>
      )}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
};

export default Header;


