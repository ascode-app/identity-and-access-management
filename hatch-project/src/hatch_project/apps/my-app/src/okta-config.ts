import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID!,
  redirectUri: process.env.REACT_APP_OKTA_REDIRECT_URI!,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
});

export { oktaAuth };
