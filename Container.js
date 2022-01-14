import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Sidebar.css';
import './Container.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import HomeIcon from '@mui/icons-material/Home';      // Personal
import SchoolIcon from '@mui/icons-material/School';   // Educational
import PhoneIcon from '@mui/icons-material/Phone';    // Contact
import LoupeIcon from '@mui/icons-material/Loupe';     // Additional
import UploadIcon from '@mui/icons-material/Upload';    // Upload
import NewspaperIcon from '@mui/icons-material/Newspaper';   // Preview
import PaymentIcon from '@mui/icons-material/Payment';    // Fees Payment


const drawerWidth = 240;

function ResponsiveDrawer(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <>
            <div className='sidebar'>
                <Toolbar />
                <List>
                    <ListItem enablePadding>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <NavLink to='/personal_details' className='side-cont' style={{ color: 'gray' }}>Personal Details</NavLink>
                    </ListItem>
                    <ListItem enablePadding>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <NavLink to='/educational_details' className='side-cont' style={{ color: 'gray' }}>Educational Details</NavLink>
                    </ListItem>
                    <ListItem enablePadding>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <NavLink to='/contact_details' className='side-cont' style={{ color: 'gray' }}>Contact details</NavLink>
                    </ListItem>
                    <ListItem enablePadding>
                        <ListItemIcon>
                            <LoupeIcon />
                        </ListItemIcon>
                        <NavLink to='/additional_details' className='side-cont' style={{ color: 'gray' }}>Additional Details</NavLink>
                    </ListItem>
                    <ListItem enablePadding>
                        <ListItemIcon>
                            <UploadIcon />
                        </ListItemIcon>
                        <NavLink to='/upload_details' className='side-cont' style={{ color: 'gray' }}>Upload Details</NavLink>
                    </ListItem>
                    <ListItem enablePadding>
                        <ListItemIcon>
                            <NewspaperIcon />
                        </ListItemIcon>
                        <NavLink to='/preview_details' className='side-cont' style={{ color: 'gray' }}>Preview Details</NavLink>
                    </ListItem>
                    <ListItem enablePadding>
                        <ListItemIcon>
                            <PaymentIcon />
                        </ListItemIcon>
                        <NavLink to='/application_fees' className='side-cont' style={{ color: 'gray' }}>Pay Application fees</NavLink>
                    </ListItem>
                </List>
                <div className="help">
                    <h5 onClick="#">Having issues? Contact at <a href='/'>support@gmail.com</a></h5>
                </div>
            </div>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* <Contact /> */}
                {/* <FeesPayment /> */}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
