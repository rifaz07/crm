import React, { useState } from 'react';
import { Box, Stack, Avatar, Typography, Chip } from '@mui/material';
import { AppCard, AppInput, AppButton } from '../components/common';
import PersonIcon from '@mui/icons-material/Person';

/**
 * Profile Page Component
 * Displays mock user data in read-only mode
 * UI ONLY - No save functionality or backend calls
 */
const Profile = () => {
    // Mock user data
    const [userData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        avatar: '', // Empty string - will show default avatar
    });

    const [editMode, setEditMode] = useState(false);

    /**
     * Toggle edit mode (UI only - no actual save functionality)
     */
    const handleEditToggle = () => {
        setEditMode((prev) => !prev);
        console.log('Edit mode:', !editMode ? 'ON' : 'OFF');
    };

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
            {/* Page Header */}
            <Typography variant="h4" fontWeight={600} gutterBottom>
                My Profile
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                View and manage your account information
            </Typography>

            {/* Profile Card */}
            <AppCard
                title="Profile Information"
                subtitle="Your personal details and account settings"
                action={
                    <AppButton
                        variant={editMode ? 'outlined' : 'contained'}
                        color="primary"
                        onClick={handleEditToggle}
                        size="small"
                    >
                        {editMode ? 'Cancel' : 'Edit'}
                    </AppButton>
                }
                elevation={2}
            >
                <Stack spacing={3}>
                    {/* Avatar Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            pb: 2,
                            borderBottom: 1,
                            borderColor: 'divider',
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                bgcolor: 'primary.main',
                                fontSize: '2rem',
                            }}
                        >
                            {userData.avatar ? (
                                <img
                                    src={userData.avatar}
                                    alt={userData.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <PersonIcon fontSize="large" />
                            )}
                        </Avatar>
                        <Box>
                            <Typography variant="h6" fontWeight={600}>
                                {userData.name}
                            </Typography>
                            <Chip
                                label={userData.role}
                                color="primary"
                                size="small"
                                sx={{ mt: 0.5 }}
                            />
                        </Box>
                    </Box>

                    {/* Form Fields */}
                    <AppInput
                        label="Full Name"
                        name="name"
                        value={userData.name}
                        disabled={!editMode}
                        placeholder="Enter your full name"
                    />

                    <AppInput
                        label="Email Address"
                        name="email"
                        type="email"
                        value={userData.email}
                        disabled={true}
                        helperText="Email cannot be changed"
                    />

                    <AppInput
                        label="Role"
                        name="role"
                        value={userData.role}
                        disabled={true}
                        helperText="Role is managed by administrators"
                    />

                    {/* Info Message */}
                    {editMode && (
                        <Box
                            sx={{
                                p: 2,
                                backgroundColor: 'info.lighter',
                                borderRadius: 1,
                                border: 1,
                                borderColor: 'info.light',
                            }}
                        >
                            <Typography variant="body2" color="info.dark">
                                <strong>Note:</strong> This is a UI-only demo. No save functionality
                                is implemented yet. Changes will not be persisted.
                            </Typography>
                        </Box>
                    )}
                </Stack>
            </AppCard>

            {/* Additional Info Card */}
            <AppCard
                title="Account Status"
                sx={{ mt: 3 }}
                elevation={2}
            >
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                            Account Status
                        </Typography>
                        <Chip label="Active" color="success" size="small" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                            Member Since
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                            January 2024
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="text.secondary">
                            Last Login
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                            Today, 5:30 PM
                        </Typography>
                    </Box>
                </Stack>
            </AppCard>
        </Box>
    );
};

export default Profile;
