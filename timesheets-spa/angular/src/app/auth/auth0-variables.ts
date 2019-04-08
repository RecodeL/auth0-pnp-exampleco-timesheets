interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  silentCallbackURL: string;
  audience: string;
  apiUrl: string;
  scopes: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'JOZMTpK0AliY88vOBWKSqkKooJm6ssAD',
  domain: 'jimmy-moda.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  silentCallbackURL: 'http://localhost:3001/silent',
  audience: 'https://sample.timesheets.com',
  apiUrl: 'http://localhost:8080',
  scopes: 'openid profile read:timesheets create:timesheets delete:timesheets approve:timesheets'
};
