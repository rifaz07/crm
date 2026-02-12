import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

/**
 * AppInput - Standardized input component wrapping Material UI TextField
 * Integrates with form validation and provides consistent styling
 */
const AppInput = forwardRef(({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error = false,
    helperText = '',
    placeholder,
    disabled = false,
    required = false,
    fullWidth = true,
    multiline = false,
    rows = 1,
    autoComplete,
    autoFocus = false,
    sx = {},
    InputProps,
    ...otherProps
}, ref) => {
    return (
        <TextField
            ref={ref}
            label={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            fullWidth={fullWidth}
            multiline={multiline}
            rows={multiline ? rows : undefined}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            variant="outlined"
            sx={sx}
            InputProps={InputProps}
            {...otherProps}
        />
    );
});

AppInput.displayName = 'AppInput';

AppInput.propTypes = {
    /** Input label */
    label: PropTypes.string,
    /** Input name attribute */
    name: PropTypes.string.isRequired,
    /** Input type */
    type: PropTypes.string,
    /** Controlled input value */
    value: PropTypes.any,
    /** Change handler */
    onChange: PropTypes.func,
    /** Shows error state */
    error: PropTypes.bool,
    /** Helper text shown below input (error message or hint) */
    helperText: PropTypes.string,
    /** Placeholder text */
    placeholder: PropTypes.string,
    /** Disables the input */
    disabled: PropTypes.bool,
    /** Marks input as required */
    required: PropTypes.bool,
    /** Makes input full width */
    fullWidth: PropTypes.bool,
    /** Enables multiline mode */
    multiline: PropTypes.bool,
    /** Number of rows for multiline input */
    rows: PropTypes.number,
    /** Autocomplete attribute */
    autoComplete: PropTypes.string,
    /** Auto-focuses input on mount */
    autoFocus: PropTypes.bool,
    /** Custom styles using MUI sx prop */
    sx: PropTypes.object,
    /** Props passed to the Input component */
    InputProps: PropTypes.object,
};

export default AppInput;
