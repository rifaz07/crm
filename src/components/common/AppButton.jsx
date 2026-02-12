import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from '@mui/material';

/**
 * AppButton - Standardized button component wrapping Material UI Button
 * Provides consistent styling and loading state handling across the application
 */
const AppButton = forwardRef(({
    variant = 'contained',
    color = 'primary',
    loading = false,
    startIcon,
    endIcon,
    disabled,
    children,
    onClick,
    type = 'button',
    fullWidth = false,
    size = 'medium',
    sx = {},
    ...otherProps
}, ref) => {
    return (
        <Button
            ref={ref}
            variant={variant}
            color={color}
            disabled={disabled || loading}
            startIcon={loading ? null : startIcon}
            endIcon={loading ? null : endIcon}
            onClick={onClick}
            type={type}
            fullWidth={fullWidth}
            size={size}
            sx={{
                position: 'relative',
                ...sx,
            }}
            {...otherProps}
        >
            {loading && (
                <CircularProgress
                    size={20}
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        marginLeft: '-10px',
                    }}
                />
            )}
            <span style={{ visibility: loading ? 'hidden' : 'visible' }}>
                {children}
            </span>
        </Button>
    );
});

AppButton.displayName = 'AppButton';

AppButton.propTypes = {
    /** Button variant - contained, outlined, or text */
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    /** Button color theme */
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),
    /** Shows loading spinner and disables button */
    loading: PropTypes.bool,
    /** Icon to display at the start of the button */
    startIcon: PropTypes.node,
    /** Icon to display at the end of the button */
    endIcon: PropTypes.node,
    /** Disables the button */
    disabled: PropTypes.bool,
    /** Button content */
    children: PropTypes.node.isRequired,
    /** Click handler */
    onClick: PropTypes.func,
    /** Button type attribute */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    /** Makes button full width */
    fullWidth: PropTypes.bool,
    /** Button size */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Custom styles using MUI sx prop */
    sx: PropTypes.object,
};

export default AppButton;
