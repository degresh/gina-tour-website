"use client"

// import { AccountCircle } from "@mui/icons-material";
// import {
//   AppBar,
//   Box,
//   Button,
//   Divider,
//   Drawer, IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText, Menu, MenuItem, Toolbar, Typography
// } from "@mui/material";
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

export default function Page() {
  return (
    <p>Dashboard Page</p>
  );
}

// export default function Page() {
//   /**
//    * App Bar
//    */
//   const [auth, setAuth] = React.useState(true);
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setAuth(event.target.checked);
//   };
//
//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//
//   /**
//    * Drawer
//    */
//   const [open, setOpen] = React.useState(false);
//
//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen);
//   };
//
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//
//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {['Pendaftaran', 'Pembayaran', 'Penjadwalan', 'Akomodasi', 'Refund'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
//
//   return (
//     <div>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Photos
//           </Typography>
//           {auth && (
//             <div>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }