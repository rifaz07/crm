import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

/**
 * AuthLayout - Layout for authentication pages (Login, Register, etc.)
 * Provides a centered, minimal layout for auth forms
 */
const AuthLayout = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: (theme) => theme.palette.grey[100],
                padding: 2,
            }}
        >
            <Outlet />
        </Box>
    );
};

export default AuthLayout;
