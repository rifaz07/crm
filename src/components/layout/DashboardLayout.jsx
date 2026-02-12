import React from 'react';
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
} from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';

const DRAWER_WIDTH = 240;

/**
 * DashboardLayout - Main layout for authenticated pages
 * Features:
 * - Fixed left sidebar with navigation
 * - Top app bar with title and user avatar
 * - Main content area with Outlet for nested routes
 */
const DashboardLayout = () => {
    // Mock user data for avatar
    const mockUser = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: '', // Empty - will show default avatar
    };

    // Navigation items
    const navItems = [
        {
            label: 'Dashboard',
            path: '/dashboard',
            icon: <DashboardIcon />,
        },
        {
            label: 'Profile',
            path: '/profile',
            icon: <PersonIcon />,
        },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Top App Bar */}
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${DRAWER_WIDTH}px)`,
                    ml: `${DRAWER_WIDTH}px`,
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        CRM Dashboard
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {mockUser.name}
                        </Typography>
                        <Avatar
                            sx={{
                                width: 32,
                                height: 32,
                                bgcolor: 'secondary.main',
                            }}
                        >
                            {mockUser.avatar ? (
                                <img
                                    src={mockUser.avatar}
                                    alt={mockUser.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <PersonIcon fontSize="small" />
                            )}
                        </Avatar>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Left Sidebar */}
            <Drawer
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {/* Sidebar Header */}
                <Toolbar>
                    <Typography variant="h6" fontWeight={700} color="primary">
                        CRM
                    </Typography>
                </Toolbar>
                <Divider />

                {/* Navigation List */}
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.path} disablePadding>
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                sx={{
                                    '&.active': {
                                        backgroundColor: 'primary.lighter',
                                        borderRight: 3,
                                        borderColor: 'primary.main',
                                        '& .MuiListItemIcon-root': {
                                            color: 'primary.main',
                                        },
                                        '& .MuiListItemText-primary': {
                                            color: 'primary.main',
                                            fontWeight: 600,
                                        },
                                    },
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                    },
                                }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Main Content Area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                    minHeight: '100vh',
                }}
            >
                <Toolbar /> {/* Spacer for fixed AppBar */}
                <Outlet />
            </Box>
        </Box>
    );
};

export default DashboardLayout;
