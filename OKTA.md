# Okta Integration Demo

This React application demonstrates integration with Okta for authentication and authorization.

## Prerequisites

1. An Okta Developer Account (free at https://developer.okta.com)
2. Node.js and npm installed
3. The Okta React SDK packages (already installed)

## Okta Application Setup

1. **Create an Okta Application:**
   - Log in to your Okta Developer/Integrator Console (free at https://integrator-1150200.okta.com, email: wvanheemstra@googlemail.com)

   <img width="691" height="725" alt="Image" src="https://github.com/user-attachments/assets/ecbb6ae3-a7e2-4e54-b628-b673f2f6bea0" />

   You will be redirected to:

   <img width="936" height="740" alt="Image" src="https://github.com/user-attachments/assets/1d7d3762-c878-4e44-a3a7-4c1eb4851177" />

   If you have the Okta Verify app installed on your (mobile) device, choose **Code**, otherwise choose **Password** (which you created when signing up with Okta).

   <img width="936" height="740" alt="Image" src="https://github.com/user-attachments/assets/780ecf47-c283-4c98-abcd-61b65c26df6e" />

   <img width="938" height="822" alt="Image" src="https://github.com/user-attachments/assets/2db457f5-8b60-4629-865c-770ee9e32b62" />

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

### 📍 **Where to Put Your Okta Credentials**

You need to update the `.env.local` file in your `my-app` directory. Here's exactly what you need to do:

### 🔧 **Step 1: Get Your Okta Credentials**

First, you need to create an Okta application and get your credentials:

1. **Go to your Okta Developer Console:** https://developer.okta.com
2. **Navigate to:** Applications → Applications
3. **Click:** "Create App Integration"
4. **Choose:** "OIDC - OpenID Connect" → "Single-Page Application" → "Next"
5. **Configure:**
   - **App integration name:** `Okta Demo App` (or any name you prefer)
   - **Grant type:** ✅ Authorization Code (checked)
   - **Controlled access:** Allow everyone in your organization to access
   - **Sign-in redirect URIs:** `http://localhost:4200/login/callback`
   - **Sign-out redirect URIs:** `http://localhost:4200`
   - **Trusted Origins:** Add `http://localhost:4200` with ✅ CORS and ✅ Redirect enabled

### 🔑 **Step 2: Get Your Values**

After creating the app, you'll find:
- **Domain:** At the top of your Okta Developer Console (e.g., `dev-123456.okta.com`)
- **Client ID:** In the "General" tab of your app (e.g., `0oa1234567890abcdef`)

### ✏️ **Step 3: Update the .env.local File**

Replace the placeholder values in your `.env.local` file:

```bash
# Replace these with your actual Okta application settings
REACT_APP_OKTA_DOMAIN=your-actual-domain.okta.com
REACT_APP_OKTA_CLIENT_ID=your-actual-client-id
REACT_APP_OKTA_REDIRECT_URI=http://localhost:4200/login/callback

# Example:
# REACT_APP_OKTA_DOMAIN=dev-abc123.okta.com
# REACT_APP_OKTA_CLIENT_ID=0oa1234567890abcdef
# REACT_APP_OKTA_REDIRECT_URI=http://localhost:4200/login/callback
```

### 🛠️ **How to Edit the File**

You can edit the `.env.local` file using any text editor:

**Option 1: Using VS Code (if you have it open)**
- Open the `.env.local` file in your editor
- Replace the placeholder values with your actual Okta credentials

**Option 2: Using the command line**
```bash
nano .env.local
# or
vim .env.local
# or
code .env.local
```

### ⚠️ **Important Notes**

- **Never commit `.env.local`** to version control (it's already in `.gitignore`)
- **The redirect URI must match exactly** what you configured in Okta
- **Make sure CORS is enabled** for `http://localhost:4200` in your Okta app
- **The development server must be restarted** after changing environment variables

### 🚀 **After Updating the File**

1. **Save the file**
2. **Restart the development server** (if it's running):
   ```bash
   # Stop the current server (Ctrl+C) then restart:
   npx nx serve my-app
   ```
3. **Open your browser** to `http://localhost:4200`
4. **Click "Login with Okta"** to test the integration

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

---

## Implementation Summary

✅ **What Was Added:**

1. **Dependencies Installed:**
   - `@okta/okta-react` - React integration for Okta
   - `@okta/okta-auth-js` - Core Okta authentication library

2. **Configuration Files:**
   - `.env.local` - Environment variables for Okta settings
   - `okta-config.ts` - Okta authentication configuration

3. **React Components Created:**
   - **App.tsx** - Main app with Security provider and routing
   - **HomePage.tsx** - Public homepage with login/logout functionality
   - **ProfilePage.tsx** - Protected page showing user information
   - **LoginPage.tsx** - Dedicated login page

4. **Documentation:**
   - `OKTA_SETUP.md` - Complete setup guide and instructions

### 🚀 **Features Implemented:**

- **🔐 Complete Authentication Flow:**
  - Login with Okta redirect
  - Automatic callback handling
  - Secure logout functionality

- **🛡️ Protected Routes:**
  - Public home page
  - Protected profile page requiring authentication
  - Automatic redirects for unauthenticated users

- **👤 User Profile Display:**
  - User name, email, username, and ID
  - Complete user claims viewer (for debugging)
  - Real-time authentication state updates

- **🎨 Modern UI:**
  - Tailwind CSS styling
  - Responsive design
  - Loading states and proper error handling

### 📋 **Quick Start:**

1. **Set up your Okta application** (detailed instructions above)
2. **Update `.env.local`** with your Okta credentials
3. **Run the app:**
   ```bash
   npx nx serve my-app
   ```

The application is now ready to demonstrate a complete Okta integration with a modern, professional interface!