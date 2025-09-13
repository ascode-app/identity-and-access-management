import { useOktaAuth } from '@okta/okta-react';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { oktaAuth, authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
        setLoading(false);
      });
    }
  }, [authState, oktaAuth]);

  const logout = async () => {
    await oktaAuth.signOut();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading user profile...</div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h1>
            
            {userInfo && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1 text-sm text-gray-900">
                      {userInfo.name || 'Not provided'}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 text-sm text-gray-900">
                      {userInfo.email || 'Not provided'}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div className="mt-1 text-sm text-gray-900">
                      {userInfo.preferred_username || 'Not provided'}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      User ID
                    </label>
                    <div className="mt-1 text-sm text-gray-900">
                      {userInfo.sub || 'Not provided'}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    All User Claims
                  </h3>
                  <div className="bg-gray-50 rounded-md p-4">
                    <pre className="text-sm text-gray-700 overflow-auto">
                      {JSON.stringify(userInfo, null, 2)}
                    </pre>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t">
                  <button
                    onClick={logout}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
