import Joi from 'joi';

/**
 * Login form validation schema
 * Validates email and password fields
 */
export const loginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Please enter a valid email address',
            'any.required': 'Email is required',
        }),
    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 6 characters',
            'any.required': 'Password is required',
        }),
});

/**
 * Helper function to format Joi validation errors
 * Converts Joi error array to an object with field names as keys
 * @param {Joi.ValidationError} error - Joi validation error object
 * @returns {Object} Object with field names as keys and error messages as values
 */
export const formatJoiErrors = (error) => {
    const errors = {};
    if (error && error.details) {
        error.details.forEach((detail) => {
            errors[detail.path[0]] = detail.message;
        });
    }
    return errors;
};
