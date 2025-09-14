import { OktaAuth } from '@okta/okta-auth-js';

// Okta Configuration - using hardcoded values for demo
const OKTA_DOMAIN = 'integrator-1150200.okta.com';
const CLIENT_ID = '0oaveu18q5ebi43io697';
// const REDIRECT_URI = 'http://localhost:4200/login/callback';
// Below is specific for our ONA workspace
const REDIRECT_URI = 'https://4200--019949ca-4f5c-7e6c-a3f0-2c843c088d1c.eu-central-1-01.gitpod.dev/login/callback';

console.log('Okta Configuration:', {
  domain: OKTA_DOMAIN,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI
});

const oktaAuth = new OktaAuth({
  issuer: `https://${OKTA_DOMAIN}/oauth2/default`,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
});

export { oktaAuth };
