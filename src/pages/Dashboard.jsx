import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { AppCard } from '../components/common';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';

/**
 * Dashboard Page Component
 * Displays KPI cards with mock data
 * UI ONLY - No backend integration
 */
const Dashboard = () => {
    // Mock KPI data
    const kpiData = [
        {
            id: 1,
            title: 'Total Customers',
            value: '1,234',
            subtitle: 'Active customers in the system',
            icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
            color: 'primary.lighter',
        },
        {
            id: 2,
            title: 'Total Leads',
            value: '567',
            subtitle: 'Leads in the pipeline',
            icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'success.main' }} />,
            color: 'success.lighter',
        },
        {
            id: 3,
            title: 'Total Deals',
            value: '89',
            subtitle: 'Closed deals this month',
            icon: <HandshakeIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
            color: 'warning.lighter',
        },
    ];

    return (
        <Box>
            {/* Page Header */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Welcome back! Here's an overview of your CRM metrics.
                </Typography>
            </Box>

            {/* KPI Cards Grid */}
            <Grid container spacing={3}>
                {kpiData.map((kpi) => (
                    <Grid item xs={12} sm={6} md={4} key={kpi.id}>
                        <AppCard elevation={2}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                {/* Icon Container */}
                                <Box
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 2,
                                        backgroundColor: kpi.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {kpi.icon}
                                </Box>

                                {/* KPI Content */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 0.5 }}
                                    >
                                        {kpi.title}
                                    </Typography>
                                    <Typography variant="h4" fontWeight={700}>
                                        {kpi.value}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ mt: 0.5, display: 'block' }}
                                    >
                                        {kpi.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        </AppCard>
                    </Grid>
                ))}
            </Grid>

            {/* Info Message */}
            <Box
                sx={{
                    mt: 4,
                    p: 2,
                    backgroundColor: 'info.lighter',
                    borderRadius: 1,
                    border: 1,
                    borderColor: 'info.light',
                }}
            >
                {/* <Typography variant="body2" color="info.dark">
                    <strong>Note:</strong> This is a UI-only demo with mock data. No backend
                    integration is implemented yet.
                </Typography> */}
            </Box>
        </Box>
    );
};

export default Dashboard;
