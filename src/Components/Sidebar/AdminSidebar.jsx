import React, { useState } from 'react';
import {
  Drawer, List, ListItem, ListItemText, IconButton, Collapse, Box, Toolbar, AppBar, Typography, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom'; 
import { signOut } from 'firebase/auth'; 
import { auth } from '../../Configuration/Firebase';

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Sign the user out and clear local storage
      await signOut(auth);
      localStorage.clear();
      navigate('/'); // Redirect to login or home page
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleDropdownClick = (menu) => {
    setDropdownOpen((prevState) => ({ ...prevState, [menu]: !prevState[menu] }));
  };

  const menuItems = [
    { name: 'Dashboard', links: [{ name: 'Dashboard Page', href: '/admin-dashboard' }] },
    { name: 'Booking Table', links: [{ name: 'Booked Room', href: '/Booking/Manager/RoomTable' },{ name: 'Booked Gym', href: '/Booking/Manager/GymTable' }] },
    { name: 'Contact Information', links: [{ name: 'Contact Table', href: '/Contact/Admin/ContactTable' }] },
    { name: 'All Payments', links: [{ name: 'Payment Table', href: '/Payment/Admin/PaymentTable' }] },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed"
       sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(11, 23, 38)',
        '@media (max-width: 480px)': {
      padding: '0.5rem'
    }
     }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Hotel Majestic Admin
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{
              '@media (max-width: 480px)': {
                size: 'small',
              },
            }}
          >
           <AccountCircle 
      />
         
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout} // Add onClick to the icon
        style={{ cursor: 'pointer' }}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
    '@media (max-width: 768px)': {
      width: open ? 240 : 0,
      '& .MuiDrawer-paper': {
        width: open ? 240 : 0,
      },
    },
    '@media (max-width: 480px)': {
      width: open ? 180 : 0, 
      '& .MuiDrawer-paper': {
        width: open ? 180 : 0,
      },
    },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((menu, index) => (
            <React.Fragment key={index}>
              <ListItem button="true" onClick={() => handleDropdownClick(menu.name)}>
                <ListItemText primary={menu.name} sx={{ color: 'rgb(11, 23, 38)' }} />
                {dropdownOpen[menu.name] ? <ExpandLess sx={{ color: 'rgb(11, 23, 38)' }} /> : <ExpandMore sx={{ color: 'rgb(11, 23, 38)' }} />}
              </ListItem>
              <Collapse in={dropdownOpen[menu.name]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menu.links.map((link, linkIndex) => (
                    <ListItem button="true" key={linkIndex} sx={{ pl: 4 }}>
                      <ListItemText>
                        <Link to={link.href} style={{ textDecoration: 'none', color: 'rgb(11, 23, 38)' }}>
                          {link.name}
                        </Link>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
