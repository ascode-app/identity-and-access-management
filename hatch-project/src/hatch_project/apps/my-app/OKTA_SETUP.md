# Okta Integration Demo Setup

This React application demonstrates integration with Okta for authentication and authorization.

## Prerequisites

1. An Okta Developer Account (free at https://developer.okta.com)
2. Node.js and npm installed
3. The Okta React SDK packages (already installed)

## Okta Application Setup

1. **Create an Okta Application:**
   - Log in to your Okta Developer Console
   - Navigate to Applications → Applications
   - Click "Create App Integration"
   - Choose "OIDC - OpenID Connect"
   - Choose "Single-Page Application"
   - Click "Next"

2. **Configure Application Settings:**
   - **App integration name:** Okta Demo App (or any name you prefer)
   - **Grant type:** Authorization Code (checked)
   - **Controlled access:** Allow everyone in your organization to access (for demo purposes)
   - **Sign-in redirect URIs:** `http://localhost:4200/login/callback`
   - **Sign-out redirect URIs:** `http://localhost:4200`
   - **Trusted Origins:** Add `http://localhost:4200` with CORS and Redirect enabled

3. **Get Your Configuration Values:**
   - After creating the app, go to the "General" tab
   - Copy the **Client ID**
   - Your **Domain** is shown at the top of the Okta Developer Console

## Environment Configuration

Update the `.env.local` file in the app directory with your Okta configuration:

```bash
# Replace these with your actual Okta application settings
REACT_APP_OKTA_DOMAIN=dev-123456.okta.com
REACT_APP_OKTA_CLIENT_ID=0oa1234567890abcdef
REACT_APP_OKTA_REDIRECT_URI=http://localhost:4200/login/callback
```

## Running the Application

1. **Start the development server:**
   ```bash
   npx nx serve my-app
   ```

2. **Open your browser:**
   - Navigate to `http://localhost:4200`
   - You should see the Okta Demo App homepage

## Features Demonstrated

### 🔐 Authentication Flow
- **Login:** Click "Login with Okta" to redirect to Okta's hosted login page
- **Callback:** Automatic handling of the OAuth callback after successful authentication
- **Logout:** Secure logout that clears the Okta session

### 🛡️ Protected Routes
- **Home Page:** Publicly accessible with login/logout functionality
- **Profile Page:** Protected route that requires authentication
- **Automatic Redirects:** Unauthenticated users are redirected to login

### 👤 User Profile Display
- **User Information:** Display name, email, username, and user ID
- **Claims Viewer:** Complete user claims from Okta (for debugging)
- **Real-time Updates:** Profile updates automatically when user logs in/out

### 🎨 Modern UI
- **Tailwind CSS:** Responsive design with modern styling
- **Loading States:** Proper loading indicators during authentication
- **Error Handling:** Graceful handling of authentication errors

## Code Structure

```
src/
├── okta-config.ts          # Okta configuration and setup
├── app/
│   ├── app.tsx            # Main app with Security provider and routing
│   ├── home-page.tsx      # Public homepage with login/logout
│   ├── profile-page.tsx   # Protected profile page
│   └── login-page.tsx     # Login page component
└── .env.local             # Environment configuration
```

## Security Features

- **PKCE (Proof Key for Code Exchange):** Enabled for enhanced security
- **Secure Routes:** Protected routes using Okta's SecureRoute component
- **Token Management:** Automatic token refresh and management
- **Session Management:** Proper session handling and cleanup

## Troubleshooting

### Common Issues:

1. **"Invalid redirect URI" error:**
   - Ensure the redirect URI in your Okta app matches exactly: `http://localhost:4200/login/callback`

2. **CORS errors:**
   - Make sure `http://localhost:4200` is added to Trusted Origins in your Okta app

3. **"Client ID not found" error:**
   - Verify your Client ID in the `.env.local` file matches your Okta application

4. **Environment variables not loading:**
   - Restart the development server after updating `.env.local`
   - Ensure the `.env.local` file is in the correct directory

### Development Tips:

- Use browser developer tools to inspect network requests
- Check the Okta Developer Console logs for authentication flow debugging
- The application includes detailed user claims display for debugging user information

## Next Steps

This demo provides a foundation for integrating Okta into your applications. You can extend it by:

- Adding role-based access control (RBAC)
- Implementing custom claims handling
- Adding more protected routes and features
- Integrating with your backend API using Okta tokens
- Customizing the login experience with Okta's hosted pages

## Resources

- [Okta React SDK Documentation](https://github.com/okta/okta-react)
- [Okta Developer Documentation](https://developer.okta.com/docs/)
- [OAuth 2.0 and OpenID Connect](https://developer.okta.com/docs/concepts/oauth-openid/)
