import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const logout = async () => {
    await oktaAuth.signOut();
  };

  if (!authState) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to Okta Demo App
          </h1>
          
          {authState.isAuthenticated ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Hello! You are successfully authenticated with Okta.
              </p>
              <div className="space-x-4">
                <Link
                  to="/profile"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Profile
                </Link>
                <button
                  onClick={logout}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Please log in to access your profile and protected content.
              </p>
              <button
                onClick={login}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login with Okta
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
