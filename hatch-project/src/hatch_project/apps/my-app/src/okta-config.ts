import { OktaAuth } from '@okta/okta-auth-js';

// Debug environment variables
console.log('Environment variables:', {
  REACT_APP_OKTA_DOMAIN: process.env.REACT_APP_OKTA_DOMAIN,
  REACT_APP_OKTA_CLIENT_ID: process.env.REACT_APP_OKTA_CLIENT_ID,
  REACT_APP_OKTA_REDIRECT_URI: process.env.REACT_APP_OKTA_REDIRECT_URI
});

const oktaAuth = new OktaAuth({
  issuer: `https://integrator-1150200.okta.com/oauth2/default`,
  clientId: '0oaveu18q5ebi43io697',
  redirectUri: 'http://localhost:4200/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
});

export { oktaAuth };
