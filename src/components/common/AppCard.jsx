import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardActions, Divider } from '@mui/material';

/**
 * AppCard - Standardized card component for content sections
 * Provides consistent layout with optional title, subtitle, and action button
 */
const AppCard = ({
    title,
    subtitle,
    action,
    children,
    cardActions,
    elevation = 1,
    sx = {},
    ...otherProps
}) => {
    const hasHeader = title || subtitle || action;

    return (
        <Card
            elevation={elevation}
            sx={{
                borderRadius: 2,
                ...sx,
            }}
            {...otherProps}
        >
            {hasHeader && (
                <>
                    <CardHeader
                        title={title}
                        subheader={subtitle}
                        action={action}
                        sx={{
                            '& .MuiCardHeader-title': {
                                fontSize: '1.25rem',
                                fontWeight: 600,
                            },
                            '& .MuiCardHeader-subheader': {
                                fontSize: '0.875rem',
                            },
                        }}
                    />
                    <Divider />
                </>
            )}

            <CardContent>
                {children}
            </CardContent>

            {cardActions && (
                <>
                    <Divider />
                    <CardActions sx={{ padding: 2 }}>
                        {cardActions}
                    </CardActions>
                </>
            )}
        </Card>
    );
};

AppCard.propTypes = {
    /** Card title displayed in header */
    title: PropTypes.string,
    /** Card subtitle displayed below title */
    subtitle: PropTypes.string,
    /** Action button or element displayed in header */
    action: PropTypes.node,
    /** Card content */
    children: PropTypes.node.isRequired,
    /** Actions displayed at the bottom of the card */
    cardActions: PropTypes.node,
    /** Card elevation (shadow depth) */
    elevation: PropTypes.number,
    /** Custom styles using MUI sx prop */
    sx: PropTypes.object,
};

export default AppCard;
