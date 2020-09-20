//okta config
// const config = {
//     clientId: '',
//     issuer: '',
//     redirectUri: 'http://localhost:3000/blog',
//     scopes: ['openid', 'profile', 'email'],
//     pkce: true
//   };

const CLIENT_ID = process.env.CLIENT_ID || '{0oa10ecyisu2QdW2t4x7}';
const ISSUER = process.env.ISSUER || 'https://dev-131285.okta.comDashboard';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:3000/blog',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
//   resourceServer: {
//     messagesUrl: 'http://localhost:8000/api/messages',
//   },
};