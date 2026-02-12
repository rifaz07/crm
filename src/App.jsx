import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Profile, Dashboard } from './pages';
import { AuthLayout, DashboardLayout } from './components/layout';

/**
 * Main App component
 * Sets up routing with react-router-dom
 * - /login → AuthLayout → Login
 * - /dashboard → DashboardLayout → Dashboard
 * - /profile → DashboardLayout → Profile
 */
function App() {
    // Create a Material UI theme
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#1976d2',
                lighter: '#e3f2fd',
            },
            secondary: {
                main: '#dc004e',
            },
            success: {
                main: '#2e7d32',
                lighter: '#e8f5e9',
            },
            warning: {
                main: '#ed6c02',
                lighter: '#fff3e0',
            },
            info: {
                main: '#0288d1',
                lighter: '#e1f5fe',
                light: '#4fc3f7',
                dark: '#01579b',
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    {/* Redirect root to login */}
                    <Route path="/" element={<Navigate to="/login" replace />} />

                    {/* Auth Routes */}
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<Login />} />
                    </Route>

                    {/* Dashboard Routes */}
                    <Route element={<DashboardLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>

                    {/* Catch-all redirect */}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
