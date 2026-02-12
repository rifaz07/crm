import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { AppCard, AppInput, AppButton } from '../components/common';
import { loginSchema, formatJoiErrors } from '../features/auth/utils/validation';

/**
 * Login Page Component
 * Provides email/password authentication UI with Joi validation
 * NO backend calls - logs form data to console on successful validation
 */
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    /**
     * Handle input field changes
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    /**
     * Handle form submission
     * Validates with Joi and logs data to console (no API call)
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data with Joi
        const { error } = loginSchema.validate(formData, { abortEarly: false });

        if (error) {
            // Format and set validation errors
            const formattedErrors = formatJoiErrors(error);
            setErrors(formattedErrors);
            return;
        }

        // Clear any existing errors
        setErrors({});

        // Simulate loading state
        setLoading(true);

        // Simulate async operation (e.g., API call)
        setTimeout(() => {
            console.log('=== LOGIN FORM SUBMITTED ===');
            console.log('Email:', formData.email);
            console.log('Password:', formData.password);
            console.log('===========================');

            setLoading(false);

            // In a real app, this would redirect to dashboard
            // For now, just show success in console
            console.log('✓ Validation successful - Ready for backend integration');
        }, 1500);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 400 }}>
            <AppCard
                title="Sign In"
                subtitle="Enter your credentials to access your account"
                elevation={3}
            >
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <AppInput
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            placeholder="Enter your email"
                            autoComplete="email"
                            autoFocus
                            required
                        />

                        <AppInput
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                        />

                        <AppButton
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            loading={loading}
                            size="large"
                            sx={{ mt: 2 }}
                        >
                            Sign In
                        </AppButton>

                        {/* <Typography
                            variant="body2"
                            color="text.secondary"
                            align="center"
                            sx={{ mt: 2 }}
                        >
                            Demo: No backend integration - check console for form data
                        </Typography> */}
                    </Stack>
                </form>
            </AppCard>
        </Box>
    );
};

export default Login;
