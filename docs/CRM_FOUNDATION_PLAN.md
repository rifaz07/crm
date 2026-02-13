REACT CRM IMPLEMENTATION PLAN
IMPORTANT

This document outlines the architectural plan for the initial frontend foundation only. No backend code or business logic is included.

1. SCALABLE FOLDER STRUCTURE
We will adopt a feature-based architecture. This allows the codebase to scale cleanly as CRM complexity grows, keeping related logic (components, hooks, validation) together.

text
src/
├── assets/             # Static assets (images, fonts)
├── components/         # Global shared components
│   ├── common/         # Atomic UI elements (Button, Input, Card)
│   └── layout/         # Layout wrappers (AuthLayout, DashboardLayout)
├── contexts/           # Global state (AuthContext, ThemeContext)
├── features/           # Feature-specific modules
│   ├── auth/           # Login, Logout, Forgot Password logic
│   │   ├── components/ # Auth-specific components (LoginForm)
│   │   ├── hooks/      # useAuth, useLogin
│   │   └── utils/      # Auth validation schemas
│   └── profile/        # User profile management
│       ├── components/ 
│       └── utils/      
├── hooks/              # Global custom hooks (useForm, useToast)
├── pages/              # Route entry points (lazy loaded)
├── services/           # API integration (Axios setup)
├── theme/              # Material UI theme configuration
├── utils/              # Helper functions (validation, formatting)
└── App.js              # Main entry with routing
2. REUSABLE UI COMPONENTS
We will build a core library of reusable components wrapping Material UI to ensure design consistency and standardize props.

Core Components List
Component	Responsibility	Key Props
AppButton	Standardized actions	variant (contained/outlined), color, loading (bool), startIcon, onClick
AppInput	Text entry with validation integration	label, name, type, control (if using form lib) or value/onChange, error (bool), helperText
AppCard	Container for content sections	title, subtitle, action (header button), children
AppPageHeader	Title and primary interactions for a page	title, breadcrumbs, actionButton
Loadable	Suspense wrapper for lazy-loaded routes	children
Design Guidelines
Strict Typing: All components should have defined PropTypes (or TS interfaces if TypeScript is adopted later).
Style Isolation: Use MUI's sx prop or styled API for custom styles; avoid global CSS files.
ForwardRef: Wrap low-level components (Input, Button) with forwardRef to support tooltips and form libraries.
3. VALIDATION STRATEGY (JOI)
We will use Joi for schema definition and a custom hook (or integration with react-hook-form) to manage form state and validation.

Joi Integration Strategy
Schema Definition: Keep schemas separate from components (e.g., features/auth/utils/validation.js).
Validation Hook: Create a reusable handler that runs Joi validation on form submission or field change.
Example Strategy:

Define schema: const loginSchema = Joi.object({ email: Joi.string().email().tlds({ allow: false }).required(), ... })
Form submission:
Run schema.validate(formData, { abortEarly: false }).
If error: Map Joi errors to an object { [fieldName]: "Error message" }.
If success: Proceed to API call.
Material UI Display
Pass the error string to the helperText prop of AppInput.
Set the error boolean prop to true if an error message exists for that field.
4. LOGIN PAGE PLAN
Objective: Authenticate user and store access token.

Fields & Validation
Email: Required, valid email format.
Password: Required, min length 6.
Components
AuthLayout: Centered card layout with background.
AppCard: Wraps the form.
AppInput: For email/password.
AppButton: "Sign In" (handles loading state).
Flow (Frontend Only)
User fills form.
On Submit -> Validate with Joi.
If Valid -> Call login(email, password) (mocked for now).
On Success ->
Save mocked JWT to localStorage (MVP decision).
Update AuthContext.
Redirect to /profile or Dashboard.
On Failure -> Show global snackbar error.
5. PROFILE PAGE PLAN
Objective: View and manage user details.

Data Points (Mocked)
Avatar: Image URL (upload placeholder only).
Full Name: Text.
Email: Read-only.
Role: Read-only (e.g., "Admin", "User").
UI Structure
Read Mode: Display details in an AppCard.
Edit Mode: Toggle form inputs for Name/Avatar.
Validation: Name must be present; Role/Email cannot be changed by user in this view.
Components
DashboardLayout: Includes Sidebar/Navbar.
AppPageHeader: Title "My Profile".
ProfileDetailsCard: The main content area.
6. AUTH FLOW (MVP)
WARNING

Security Note: For this internal MVP, we will use localStorage for the Access Token. Production grade should consider HttpOnly cookies. No Refresh Token implementation as per requirements.

JWT Handling
Storage: window.localStorage.getItem('accessToken')
Axios Interceptor: Automatically attach Authorization: Bearer <token> to every request.
Token Expiry / Unauthorized (401)
Detection: Axios response interceptor catches 401 errors.
Action:
Clear localStorage.
Set AuthContext user to null.
Redirect user to /login immediately.
7. INTENTIONALLY NOT INCLUDED
Backend / API: No Express/Node.js server. All API calls will be mocked using setTimeout promises.
Refresh Token Logic: Complexity of silent refresh is omitted; user will be forced to log out on expiry.
Role-Based Access Control (RBAC): Basic checks only; complex permission matrices are for later.
CRM Entities: No Customers, Leads, or Deals pages yet. Focus is purely on Foundation.
Database: No MongoDB schema design.
8. NEXT STEPS (FOR MONDAY)
Approval: Confirm this architectural plan.
Environment Setup: Initialize Create React App (or Vite) and install dependencies (@mui/material, joi, react-router-dom).
Scaffolding: Create folder structure and base components.
Mocking: Implement the mock Auth service to simulate login delays and success/fail states.