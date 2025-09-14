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

   Using the code:

   <img width="938" height="822" alt="Image" src="https://github.com/user-attachments/assets/07f5c22f-b57d-4d52-bb4b-e6cf46838268" />

   Using the password:

   <img width="938" height="822" alt="Image" src="https://github.com/user-attachments/assets/2db457f5-8b60-4629-865c-770ee9e32b62" />

   Now you should be logged in successfully to the Dashboard:

   <img width="1666" height="988" alt="Image" src="https://github.com/user-attachments/assets/1e42b4be-55c9-4c9c-a0f0-db94df5fbe96" />

   - Navigate to Applications → Applications

   <img width="1666" height="988" alt="Image" src="https://github.com/user-attachments/assets/a8974e98-44ee-417b-811b-41130a8453d2" />

   - Click "Create App Integration"

   <img width="1666" height="988" alt="Image" src="https://github.com/user-attachments/assets/af0cd4de-9e6d-49f8-a11c-9fa9af2ad788" />

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

   <img width="1666" height="988" alt="Image" src="https://github.com/user-attachments/assets/4d2ea6f7-6b9b-41ba-8333-2ffec3522856" />

   <img width="1666" height="988" alt="Image" src="https://github.com/user-attachments/assets/247c3eb2-1b74-4dd2-8a46-6b6060df7685" />

   <img width="1666" height="241" alt="Image" src="https://github.com/user-attachments/assets/fb3779e6-4db4-4d68-9044-b19211ebb7da" />

   - Click "Save"

3. **Get Your Configuration Values:**
   - After creating the app, go to the "General" tab

   <img width="1666" height="989" alt="Image" src="https://github.com/user-attachments/assets/1309bbaf-737f-4f16-ad42-b17f0218fa79" />

   <img width="1666" height="989" alt="Image" src="https://github.com/user-attachments/assets/18d66610-0ac7-4fb7-bb0a-0be1efaab021" />

   <img width="1666" height="989" alt="Image" src="https://github.com/user-attachments/assets/3b53f8b0-5ed9-4811-a2ce-cd1421dd19d2" />

   <img width="1666" height="592" alt="Image" src="https://github.com/user-attachments/assets/397a2b54-2d27-47ae-a01e-8ab8b0c6ca0e" />

   - Copy the **Client ID** (here: 0oaveu18q5ebi43io697)
   - Your **Domain** is shown at the top of the Okta Developer Console (here: integrator-1150200-admin.okta.com)

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

<img width="1666" height="441" alt="Image" src="https://github.com/user-attachments/assets/83ba916f-5256-49d8-9950-dfa1f25a9627" />

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

5. **Brave Browser too strict protection rules:**
   - Click the Brave shield icon in the address bars
   - Turn off "Trackers & ads blocked" for Okta

   <img width="1366" height="990" alt="Image" src="https://github.com/user-attachments/assets/71e6047d-0169-488a-a0bc-f0dd109f7c2d" />

   - Go to Brave Settings -> Privacy and security -> Cookies and other site data
   - Allow cookies for ```integrator-1150200.okta.com```

   <img width="1362" height="990" alt="Image" src="https://github.com/user-attachments/assets/f1eba4f9-f88a-4525-9013-c20c09f2371c" />

6. **Assign Yourself to the Demo App:**

   - Go to: Directory -> People
   - Find your user account (here: Willem van Heemstra)
   - Make sure the account is "Active"
   - Check if there are any restrictions
   - Make sure you are assigned to the Demo App (if not, add the Demo App)

   <img width="1358" height="989" alt="Image" src="https://github.com/user-attachments/assets/87ec4762-59dc-4f14-a12c-b21b686ae175" />

   As you can see below, Willem van Heemstra was not yet assigned to the Demo App:

   <img width="1358" height="989" alt="Image" src="https://github.com/user-attachments/assets/40a5034f-5b93-447e-a123-8b2075937bbd" />

   Assign to the Demo App.

   <img width="1358" height="989" alt="Image" src="https://github.com/user-attachments/assets/acb779d5-c639-4ba9-95e7-6d6a08d949f1" />

   Enter any additional information if so wanted.

   - Click **Save and Go Back**

   <img width="1358" height="989" alt="Image" src="https://github.com/user-attachments/assets/3d71a03b-a1d1-47fc-82fd-cae7eafb4920" />

   You may get above error: *It is not possible to assign users to an AppInstance that has Federation Broker Mode enabled*

🔍 What's Happening
Federation Broker Mode is a special Okta configuration that:
✅ Allows authentication through external identity providers
❌ Prevents direct user assignments
❌ Requires special configuration for local users
This mode is typically used when you want to authenticate users through external systems (like Active Directory, LDAP, etc.) rather than managing users directly in Okta.
🔧 Solutions
Option 1: Disable Federation Broker Mode (Recommended)
Go to: Applications → Applications → Okta Demo App
Click "General" tab
Scroll down to "Federation Broker Mode"
Click "Edit"
Uncheck "Enable Federation Broker Mode"
Save the changes
After disabling it:
Go to "Assignments" tab
Click "Assign" → "Assign to People"
Assign your user account
Option 2: Keep Federation Broker Mode (Advanced)
If you need to keep Federation Broker Mode enabled, you'll need to:
Set up a proper identity provider (like Active Directory)
Configure user provisioning
Set up proper federation rules
�� For Your Demo App
Since this is a demo application, I recommend Option 1 (disabling Federation Broker Mode) because:
✅ Simpler setup
✅ Direct user management
✅ Easier testing
✅ Standard Okta flow
Next Steps
Disable Federation Broker Mode in your Okta app
Assign your user account to the app
Test the login flow again
The 401 error should resolve once you can properly assign users to the application.
Try disabling Federation Broker Mode first - this should fix the authentication issue!

Now we have assigned ourself to the demo App:

<img width="1358" height="989" alt="Image" src="https://github.com/user-attachments/assets/b3840067-e8f1-4ac5-aeda-f97b50e47d04" />

For demonstration purpose we change the Catch All rule of the Demo App to have only **Any 1 factor type** instead of the original **Any 2 factor type**:

<img width="1358" height="989" alt="Image" src="https://github.com/user-attachments/assets/8de83d8d-2cb2-4323-b284-ca3fbaab3786" />

When warned about the less secure option, choose **Save anyway** as we use it for demonstration purpose only.

After this it will alert you: **This is a protected action. Please perform step-up authentication.**

... TO DO: Perform Step-Up Authentication. This requires that one allows the browser to open pop-up windows!

Now try again to login from the Demo App page at http://localhost:4200

   === WE ARE HERE ===

7. **Try Google Chrome Browser:**
   - Instead of Brave, try Google Chrome Browser:

   <img width="1118" height="955" alt="Image" src="https://github.com/user-attachments/assets/d0ffca66-067e-46c8-aee3-85d89c608dc7" />

   When choosing to verify with the Okta Code retrieved from an Okta Verify mobile app:

   <img width="1122" height="954" alt="Image" src="https://github.com/user-attachments/assets/6dc86be8-c117-4788-ba08-74e4e67fed66" />

   Followed by a Password verification:

   <img width="1122" height="954" alt="Image" src="https://github.com/user-attachments/assets/d1c98b84-e5c5-46c6-ba57-55f5f6f8a1b8" />

   === MORE IMAGES HERE ===    

### Development Tips:

- Use browser developer tools to inspect network requests
- Check the Okta Developer Console logs for authentication flow debugging
- The application includes detailed user claims display for debugging user information

### Policy Configuration Issues:

**"Policy evaluation failed for this request" error:**
- This occurs when your Okta app sign-on policy requires additional authentication factors
- Check your app sign-on policies in: Security → Authentication → App Sign-On Policy

**Step-up Authentication Required:**
When trying to modify security policies, Okta may require step-up authentication:

1. **Complete Step-Up Authentication:**
   - Click "Continue" or "Verify" on the step-up authentication prompt
   - Complete additional verification (Okta Verify, SMS, Email, etc.)
   - This is a security feature to prevent unauthorized policy changes

2. **Alternative Approach - Modify Existing Rule:**
   If you can't complete step-up authentication, modify the existing "Catch-all Rule":
   - Go to: Security → Authentication → App Sign-On Policy
   - Find your app's policy (e.g., "Okta Demo App")
   - Click "Edit" on the "Catch-all Rule"
   - Change "User must authenticate with" from "Any 2 factor types" to **"Password only"**
   - Save the changes

**For Demo Purposes - Simplify Authentication:**
- Change policy to require only password authentication
- This makes testing easier without requiring 2FA setup
- Production applications should use appropriate security policies

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