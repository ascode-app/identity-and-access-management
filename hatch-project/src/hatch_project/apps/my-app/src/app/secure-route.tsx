import { useOktaAuth } from '@okta/okta-react';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface SecureRouteProps {
  children: ReactNode;
}

export function SecureRoute({ children }: SecureRouteProps) {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    // Redirect to login page
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
