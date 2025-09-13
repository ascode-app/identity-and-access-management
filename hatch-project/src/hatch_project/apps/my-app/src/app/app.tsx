import { Security } from '@okta/okta-react';
import { oktaAuth } from '../okta-config';
import { LoginCallback, SecureRoute } from '@okta/okta-react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './home-page';
import ProfilePage from './profile-page';
import LoginPage from './login-page';

const restoreOriginalUri = (_oktaAuth: any, originalUri: string) => {
  window.location.replace(originalUri);
};

export function App() {
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                  Okta Demo App
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/profile" 
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/callback" element={<LoginCallback />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={
              <SecureRoute>
                <ProfilePage />
              </SecureRoute>
            } />
          </Routes>
        </main>
      </div>
    </Security>
  );
}

export default App;
