// import React, { useState, useEffect, useContext } from "react";
// import {AppBar,Toolbar,Typography,Button,IconButton,Drawer,List,ListItem,ListItemText,Avatar,} from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import logo from "../images/icon.png";
// import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
// import DragHandleIcon from '@mui/icons-material/DragHandle';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { user, logout } = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     if (user) {
//       setIsLoggedIn(true);
//       setUserName(user.username);
//     } else {
//       setIsLoggedIn(false);
//       setUserName("");
//     }
//   }, [user]);
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <List>
//             <ListItem>
//               <Avatar sx={{ bgcolor: "secondary.main", ml: 2 }}>
//                 {userName.charAt(0)}
//               </Avatar>
//             </ListItem>
//             <ListItem
//               button
//               sx={{
//                 backgroundColor: "#f50057",
//                 color: "white",
//                 fontFamily: "Times New Roman",
//                 "&:hover": {
//                   backgroundColor: "#d4004a",
//                 },
//               }}
//               component={Link}
//               to="/create-blog"
//             >
//               <ListItemText primary="Create Blog" />
//             </ListItem>
//           </List>
//           <List>
//             <ListItem
//               sx={{
//                 backgroundColor: "#3f51b5",
//                 color: "white",
//                 fontFamily: "Times New Roman",
//                 "&:hover": {
//                   backgroundColor: "#303f9f",
//                 },
//                 mt: 0,
//               }}
//               button
//               onClick={logout}
//             >
//               <ListItemText primary="Logout" />
//             </ListItem>
//           </List>
//         </>
//       ) : (
//         <List>
//           <ListItem
//             button
//             sx={{
//               backgroundColor: "#f50057",
//               color: "white",
//               fontFamily: "Times New Roman",
//               "&:hover": {
//                 backgroundColor: "#d4004a",
//               },
//             }}
//             component={Link}
//             to="/register"
//           >
//             <ListItemText primary="Register Now" />
//           </ListItem>
//           <ListItem
//             button
//             sx={{
//               backgroundColor: "#3f51b5",
//               color: "white",
//               fontFamily: "Times New Roman",
//               "&:hover": {
//                 backgroundColor: "#303f9f",
//               },
//               mt: 0,
//             }}
//             component={Link}
//             to="/login"
//           >
//             <ListItemText primary="Login" />
//           </ListItem>
//         </List>
//       )}
//     </div>
//   );

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "white" }}>
//       <Toolbar>
//         {isMobile && (
//           <IconButton
//             sx={{
//               color: "black",
//               border: "1px solid black",
//             }}
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//           >
//             < DragHandleIcon/>
//           </IconButton>
//         )}
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexGrow: 1,
//             fontFamily: "Times New Roman",
//             fontWeight: "bolder",
//             color: "black",
//             textDecoration: "none",
//             "&:hover": {
//               textDecoration: "none",
//             },
//           }}
//         >
//           <img
//             src={logo}
//             alt="Logo"
//             style={{ height: "25px", marginRight: "10px" }}
//           />
//           BloGPosteR
//         </Typography>
//         {!isMobile && (
//           <>
//             {isLoggedIn ? (
//               <>
//                 <Avatar sx={{ bgcolor: "secondary.main", ml: 2 }}>
//                   {userName.charAt(0)}
//                 </Avatar>
//                 <Button
//                   color="inherit"
//                   component={Link}
//                   to="/create-blog"
//                   sx={{
//                     backgroundColor: "#f50057",
//                     color: "white",
//                     fontFamily: "Times New Roman",
//                     ml: 2,
//                     "&:hover": { backgroundColor: "#d4004a" },
//                   }}
//                 >
//                   Create Blog
//                 </Button>

//                 <Button
//                   color="inherit"
//                   onClick={logout}
//                   sx={{
//                     backgroundColor: "#3f51b5",
//                     color: "white",
//                     fontFamily: "Times New Roman",
//                     ml: 2,
//                     "&:hover": { backgroundColor: "#303f9f" },
//                   }}
//                 >
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Button
//                   component={Link}
//                   to="/register"
//                   sx={{
//                     backgroundColor: "#f50057",
//                     color: "white",
//                     fontFamily: "Times New Roman",
//                     "&:hover": { backgroundColor: "#d4004a" },
//                   }}
//                 >
//                   Register Now
//                 </Button>
//                 <Button
//                   component={Link}
//                   to="/login"
//                   sx={{
//                     backgroundColor: "#3f51b5",
//                     color: "white",
//                     fontFamily: "Times New Roman",
//                     ml: 2,
//                     "&:hover": { backgroundColor: "#303f9f" },
//                   }}
//                 >
//                   Login
//                 </Button>
//               </>
//             )}
//           </>
//         )}
//       </Toolbar>
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;
//10-08-2024 3:49
// import React, { useState, useEffect, useContext } from "react";
// import { Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Avatar } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import logoo from "../images/blog.png";
// import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
// import DragHandleIcon from '@mui/icons-material/DragHandle';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { user, logout } = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     if (user) {
//       setIsLoggedIn(true);
//       setUserName(user.username);
//     } else {
//       setIsLoggedIn(false);
//       setUserName("");
//     }
//   }, [user]);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <List>
//             <ListItem>
//               <Avatar sx={{ bgcolor: "secondary.main", ml: 2 }}>
//                 {userName.charAt(0)}
//               </Avatar>
//             </ListItem>
//             <ListItem
//               button
//               sx={{
//                 backgroundColor: "#f50057",
//                 color: "white",
//                 fontFamily: "Times New Roman",
//                 "&:hover": {
//                   backgroundColor: "#d4004a",
//                 },
//               }}
//               component={Link}
//               to="/create-blog"
//             >
//               <ListItemText primary="Create Blog" />
//             </ListItem>
//           </List>
//           <List>
//             <ListItem
//               sx={{
//                 backgroundColor: "#3f51b5",
//                 color: "white",
//                 fontFamily: "Times New Roman",
//                 "&:hover": {
//                   backgroundColor: "#303f9f",
//                 },
//                 mt: 0,
//               }}
//               button
//               onClick={logout}
//             >
//               <ListItemText primary="Logout" />
//             </ListItem>
//           </List>
//         </>
//       ) : (
//         <List>
//           <ListItem
//             button
//             sx={{
//               backgroundColor: "#f50057",
//               color: "white",
//               fontFamily: "Times New Roman",
//               "&:hover": {
//                 backgroundColor: "#d4004a",
//               },
//             }}
//             component={Link}
//             to="/register"
//           >
//             <ListItemText primary="Register Now" />
//           </ListItem>
//           <ListItem
//             button
//             sx={{
//               backgroundColor: "#3f51b5",
//               color: "white",
//               fontFamily: "Times New Roman",
//               "&:hover": {
//                 backgroundColor: "#303f9f",
//               },
//               mt: 0,
//             }}
//             component={Link}
//             to="/login"
//           >
//             <ListItemText primary="Login" />
//           </ListItem>
//         </List>
//       )}
//     </div>
//   );

//   return (
//     <div
//       style={{
//         backgroundColor: "white",
//         padding: "10px 20px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderBottom: "1px solid #ddd",
//       }}
//     >
//       {isMobile && (
//         <IconButton
//           sx={{
//             color: "black",
//             border: "1px solid black",
//           }}
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//         >
//           <DragHandleIcon />
//         </IconButton>
//       )}
//       <Typography
//         variant="h6"
//         component={Link}
//         to="/"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexGrow: 1,
//           fontFamily: "Times New Roman",
//           fontWeight: "bolder",
//           color: "black",
//           textDecoration: "none",
//           "&:hover": {
//             textDecoration: "none",
//           },
//         }}
//       >
//         <img
//           src={logoo}
//           alt="Logo"
//           style={{ height: "25px", marginRight: "10px" }}
//         />
//         BloGPosteR
//       </Typography>
//       {!isMobile && (
//         <>
//           {isLoggedIn ? (
//             <>
//               <Avatar sx={{ bgcolor: "secondary.main", ml: 2 }}>
//                 {userName.charAt(0)}
//               </Avatar>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/create-blog"
//                 sx={{
//                   backgroundColor: "#f50057",
//                   color: "white",
//                   fontFamily: "Times New Roman",
//                   ml: 2,
//                   "&:hover": { backgroundColor: "#d4004a" },
//                 }}
//               >
//                 Create Blog
//               </Button>

//               <Button
//                 color="inherit"
//                 onClick={logout}
//                 sx={{
//                   backgroundColor: "#3f51b5",
//                   color: "white",
//                   fontFamily: "Times New Roman",
//                   ml: 2,
//                   "&:hover": { backgroundColor: "#303f9f" },
//                 }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/register"
//                 sx={{
//                   backgroundColor: "#f50057",
//                   color: "white",
//                   fontFamily: "Times New Roman",
//                   "&:hover": { backgroundColor: "#d4004a" },
//                 }}
//               >
//                 Register Now
//               </Button>
//               <Button
//                 component={Link}
//                 to="/login"
//                 sx={{
//                   backgroundColor: "#3f51b5",
//                   color: "white",
//                   fontFamily: "Times New Roman",
//                   ml: 2,
//                   "&:hover": { backgroundColor: "#303f9f" },
//                 }}
//               >
//                 Login
//               </Button>
//             </>
//           )}
//         </>
//       )}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </div>
//   );
// };

// export default Header;

//4:33
// import React, { useState, useEffect, useContext } from "react";
// import { Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Avatar, Divider } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import logoo from "../images/blog.png";
// import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
// import DragHandleIcon from '@mui/icons-material/DragHandle';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { user, logout } = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     if (user) {
//       setIsLoggedIn(true);
//       setUserName(user.username);
//     } else {
//       setIsLoggedIn(false);
//       setUserName("");
//     }
//   }, [user]);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div style={{ width: 250 }}>
//       <List>
//         {isLoggedIn && (
//           <>
//             <ListItem>
//               <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40, ml: 2 }}>
//                 {userName.charAt(0)}
//               </Avatar>
//               <ListItemText primary={userName} sx={{ ml: 2 }} />
//             </ListItem>
//             <Divider />
//           </>
//         )}
//         <ListItem
//           button
//           sx={{
//             backgroundColor: "#f50057",
//             color: "white",
//             fontFamily: "Roboto, sans-serif",
//             "&:hover": {
//               backgroundColor: "#d4004a",
//             },
//           }}
//           component={Link}
//           to="/create-blog"
//         >
//           <ListItemText primary="Create Blog" />
//         </ListItem>
//         {isLoggedIn ? (
//           <ListItem
//             sx={{
//               backgroundColor: "#3f51b5",
//               color: "white",
//               fontFamily: "Roboto, sans-serif",
//               "&:hover": {
//                 backgroundColor: "#303f9f",
//               },
//               mt: 2,
//             }}
//             button
//             onClick={logout}
//           >
//             <ListItemText primary="Logout" />
//           </ListItem>
//         ) : (
//           <>
//             <ListItem
//               button
//               sx={{
//                 backgroundColor: "#f50057",
//                 color: "white",
//                 fontFamily: "Roboto, sans-serif",
//                 "&:hover": {
//                   backgroundColor: "#d4004a",
//                 },
//               }}
//               component={Link}
//               to="/register"
//             >
//               <ListItemText primary="Register Now" />
//             </ListItem>
//             <ListItem
//               button
//               sx={{
//                 backgroundColor: "#3f51b5",
//                 color: "white",
//                 fontFamily: "Roboto, sans-serif",
//                 "&:hover": {
//                   backgroundColor: "#303f9f",
//                 },
//                 mt: 1,
//               }}
//               component={Link}
//               to="/login"
//             >
//               <ListItemText primary="Login" />
//             </ListItem>
//           </>
//         )}
//       </List>
//     </div>
//   );

//   return (
//     <header
//       style={{
//         backgroundColor: theme.palette.background.paper,
//         padding: "10px 20px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderBottom: `1px solid ${theme.palette.divider}`,
//         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       {isMobile && (
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//         >
//           <DragHandleIcon />
//         </IconButton>
//       )}
//       <Typography
//         variant="h6"
//         component={Link}
//         to="/"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           flexGrow: 1,
//           fontFamily: "Roboto, sans-serif",
//           fontWeight: "bold",
//           color: theme.palette.text.primary,
//           textDecoration: "none",
//           "&:hover": {
//             textDecoration: "underline",
//           },
//         }}
//       >
//         <img
//           src={logoo}
//           alt="Logo"
//           style={{ height: "30px", marginRight: "10px" }}
//         />
//         BloGPosteR
//       </Typography>
//       {!isMobile && (
//         <>
//           {isLoggedIn ? (
//             <>
//               <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40, ml: 2 }}>
//                 {userName.charAt(0)}
//               </Avatar>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/create-blog"
//                 sx={{
//                   backgroundColor: "#f50057",
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   "&:hover": { backgroundColor: "#d4004a" },
//                 }}
//               >
//                 Create Blog
//               </Button>
//               <Button
//                 color="inherit"
//                 onClick={logout}
//                 sx={{
//                   backgroundColor: "#3f51b5",
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   "&:hover": { backgroundColor: "#303f9f" },
//                 }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/register"
//                 sx={{
//                   backgroundColor: "#f50057",
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   "&:hover": { backgroundColor: "#d4004a" },
//                 }}
//               >
//                 Register Now
//               </Button>
//               <Button
//                 component={Link}
//                 to="/login"
//                 sx={{
//                   backgroundColor: "#3f51b5",
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   "&:hover": { backgroundColor: "#303f9f" },
//                 }}
//               >
//                 Login
//               </Button>
//             </>
//           )}
//         </>
//       )}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect, useContext } from "react";
// import { Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Avatar, Divider, Box } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import logoo from "../images/blog.png";
// import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
// import DragHandleIcon from '@mui/icons-material/DragHandle';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { user, logout } = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     if (user) {
//       setIsLoggedIn(true);
//       setUserName(user.username);
//     } else {
//       setIsLoggedIn(false);
//       setUserName("");
//     }
//   }, [user]);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div style={{ width: 250 }}>
//       <List>
//         {isLoggedIn && (
//           <>
//             <ListItem>
//               <Avatar sx={{ 
//                 bgcolor: 'transparent', 
//                 borderRadius: '50%', 
//                 width: 40, 
//                 height: 40, 
//                 ml: 2, 
//                 background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//                 {userName.charAt(0)}
//               </Avatar>
//               <ListItemText primary={userName} sx={{ ml: 2 }} />
//             </ListItem>
//             <Divider />
//           </>
//         )}
//         <ListItem
//           button
//           sx={{
//             background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//             color: "white",
//             fontFamily: "Roboto, sans-serif",
//             "&:hover": {
//               background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)',
//             },
//           }}
//           component={Link}
//           to="/create-blog"
//         >
//           <ListItemText primary="Create Blog" />
//         </ListItem>
//         {isLoggedIn ? (
//           <ListItem
//             sx={{
//               background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//               color: "white",
//               fontFamily: "Roboto, sans-serif",
//               "&:hover": {
//                 background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)',
//               },
//               mt: 2,
//             }}
//             button
//             onClick={logout}
//           >
//             <ListItemText primary="Logout" />
//           </ListItem>
//         ) : (
//           <>
//             <ListItem
//               button
//               sx={{
//                 background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//                 color: "white",
//                 fontFamily: "Roboto, sans-serif",
//                 "&:hover": {
//                   background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)',
//                 },
//               }}
//               component={Link}
//               to="/register"
//             >
//               <ListItemText primary="Register Now" />
//             </ListItem>
//             <ListItem
//               button
//               sx={{
//                 background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//                 color: "white",
//                 fontFamily: "Roboto, sans-serif",
//                 "&:hover": {
//                   background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)',
//                 },
//                 mt: 1,
//               }}
//               component={Link}
//               to="/login"
//             >
//               <ListItemText primary="Login" />
//             </ListItem>
//           </>
//         )}
//       </List>
//     </div>
//   );

//   return (
//     <header
//       style={{
//         backgroundColor: theme.palette.background.paper,
//         padding: "10px 20px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderBottom: `1px solid ${theme.palette.divider}`,
//         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       {isMobile && (
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//         >
//           <DragHandleIcon />
//         </IconButton>
//       )}
//       <Typography
//         variant="h6"
//         component={Link}
//         to="/"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           flexGrow: 1,
//           fontFamily: "Roboto, sans-serif",
//           fontWeight: "bold",
//           color: theme.palette.text.primary,
//           textDecoration: "none",
//           "&:hover": {
//             textDecoration: "underline",
//           },
//         }}
//       >
//         <img
//           src={logoo}
//           alt="Logo"
//           style={{ height: "30px", marginRight: "10px" }}
//         />
//         BloGPosteR
//       </Typography>
//       {!isMobile && (
//         <>
//           {isLoggedIn ? (
//             <>
//               <Avatar 
//                 sx={{ 
//                   bgcolor: 'transparent', 
//                   borderRadius: '50%', 
//                   width: 40, 
//                   height: 40, 
//                   ml: 2, 
//                   background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
//                   color: 'white',
//                   fontWeight: 'bold',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 {userName.charAt(0)}
//               </Avatar>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/create-blog"
//                 sx={{
//                   background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   "&:hover": { background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)' },
//                 }}
//               >
//                 Create Blog
//               </Button>
//               <Button
//                 color="inherit"
//                 onClick={logout}
//                 sx={{
//                   background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   "&:hover": { background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)' },
//                 }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/register"
//                 sx={{
//                   background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   "&:hover": { background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)' },
//                 }}
//               >
//                 Register Now
//               </Button>
//               <Button
//                 component={Link}
//                 to="/login"
//                 sx={{
//                   background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   "&:hover": { background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)' },
//                 }}
//               >
//                 Login
//               </Button>
//             </>
//           )}
//         </>
//       )}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect, useContext } from "react";
// import { Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Avatar, Divider } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import logoo from "../images/blog.png";
// import { Link } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
// import DragHandleIcon from '@mui/icons-material/DragHandle';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const { user, logout } = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     if (user) {
//       setIsLoggedIn(true);
//       setUserName(user.username);
//     } else {
//       setIsLoggedIn(false);
//       setUserName("");
//     }
//   }, [user]);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div style={{ width: 250 }}>
//       <List>
//         {isLoggedIn && (
//           <>
//             <ListItem>
//               <Avatar sx={{ 
//                 bgcolor: 'transparent', 
//                 borderRadius: '50%', 
//                 width: 40, 
//                 height: 40, 
//                 ml: 2, 
//                 background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//                 {userName.charAt(0)}
//               </Avatar>
//               <ListItemText primary={userName} sx={{ ml: 2 }} />
//             </ListItem>
//             <Divider />
//           </>
//         )}
//         <ListItem
//           button
//           sx={{
//             background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//             color: "white",
//             fontFamily: "Roboto, sans-serif",
//             "&:hover": {
//               background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)',
//             },
//           }}
//           component={Link}
//           to="/create-blog"
//         >
//           <ListItemText primary="Create Blog" />
//         </ListItem>
//         {isLoggedIn ? (
//           <ListItem
//             sx={{
//               background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//               color: "white",
//               fontFamily: "Roboto, sans-serif",
//               "&:hover": {
//                 background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)',
//               },
//               mt: 2,
//             }}
//             button
//             onClick={logout}
//           >
//             <ListItemText primary="Logout" />
//           </ListItem>
//         ) : (
//           <>
//             <ListItem
//               button
//               sx={{
//                 background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//                 color: "white",
//                 fontFamily: "Roboto, sans-serif",
//                 "&:hover": {
//                   background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)',
//                 },
//               }}
//               component={Link}
//               to="/register"
//             >
//               <ListItemText primary="Register Now" />
//             </ListItem>
//             <ListItem
//               button
//               sx={{
//                 background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//                 color: "white",
//                 fontFamily: "Roboto, sans-serif",
//                 "&:hover": {
//                   background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)',
//                 },
//                 mt: 1,
//               }}
//               component={Link}
//               to="/login"
//             >
//               <ListItemText primary="Login" />
//             </ListItem>
//           </>
//         )}
//       </List>
//     </div>
//   );

//   return (
//     <header
//       style={{
//         backgroundColor: theme.palette.background.paper,
//         padding: "10px 20px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderBottom: `1px solid ${theme.palette.divider}`,
//         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       {isMobile && (
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//         >
//           <DragHandleIcon />
//         </IconButton>
//       )}
//       <Typography
//         variant="h6"
//         component={Link}
//         to="/"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           flexGrow: 1,
//           fontFamily: "Roboto, sans-serif",
//           fontWeight: "bold",
//           color: theme.palette.text.primary,
//           textDecoration: "none",
//           "&:hover": {
//             textDecoration: "underline",
//           },
//         }}
//       >
//         <img
//           src={logoo}
//           alt="Logo"
//           style={{ height: "30px", marginRight: "10px" }}
//         />
//         BloGPosteR
//       </Typography>
//       {!isMobile && (
//         <>
//           {isLoggedIn ? (
//             <>
//               <Avatar 
//                 sx={{ 
//                   bgcolor: 'transparent', 
//                   borderRadius: '50%', 
//                   width: 40, 
//                   height: 40, 
//                   ml: 2, 
//                   background: 'linear-gradient(45deg, #4caf50 30%, #81c784 90%)',
//                   color: 'white',
//                   fontWeight: 'bold',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 {userName.charAt(0)}
//               </Avatar>
//               <Button
//                 color="inherit"
//                 component={Link}
//                 to="/create-blog"
//                 sx={{
//                   border: '2px solid transparent',
//                   background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   borderRadius: '20px',
//                   "&:hover": {
//                     background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)',
//                     border: '2px solid #f50057',
//                   },
//                 }}
//               >
//                 Create Blog
//               </Button>
//               <Button
//                 color="inherit"
//                 onClick={logout}
//                 sx={{
//                   border: '2px solid transparent',
//                   background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   borderRadius: '20px',
//                   "&:hover": {
//                     background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)',
//                     border: '2px solid #3f51b5',
//                   },
//                 }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/register"
//                 sx={{
//                   border: '2px solid transparent',
//                   background: 'linear-gradient(45deg, #f50057 30%, #d4004a 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   borderRadius: '20px',
//                   "&:hover": {
//                     background: 'linear-gradient(45deg, #d4004a 30%, #f50057 90%)',
//                     border: '2px solid #f50057',
//                   },
//                 }}
//               >
//                 Register Now
//               </Button>
//               <Button
//                 component={Link}
//                 to="/login"
//                 sx={{
//                   border: '2px solid transparent',
//                   background: 'linear-gradient(45deg, #3f51b5 30%, #303f9f 90%)',
//                   color: "white",
//                   fontFamily: "Roboto, sans-serif",
//                   ml: 2,
//                   borderRadius: '20px',
//                   "&:hover": {
//                     background: 'linear-gradient(45deg, #303f9f 30%, #3f51b5 90%)',
//                     border: '2px solid #3f51b5',
//                   },
//                 }}
//               >
//                 Login
//               </Button>
//             </>
//           )}
//         </>
//       )}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </header>
//   );
// };

// export default Header;
///11-08-2024
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


