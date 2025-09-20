'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface AuthGuardProps {
  children: ReactNode;
}


export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      console.log('AuthGuard: Checking authentication...');
      
      const isLoggedIn = Cookies.get('isLoggedIn');
      const userEmail = Cookies.get('userEmail');
      const loginTime = Cookies.get('loginTime');

      console.log('AuthGuard: Cookies found:', { isLoggedIn, userEmail, loginTime });

      if (!isLoggedIn || isLoggedIn !== 'true') {
        console.log('AuthGuard: Not authenticated, redirecting to login');
        router.replace('/auth/login');
        return;
      }

      // Optional: Check session expiry (24 hours)
      if (loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now - loginDate) / (1000 * 60 * 60);

        if (hoursDiff > 24) {
          console.log('AuthGuard: Session expired, clearing cookies and redirecting');
          Cookies.remove('isLoggedIn', { path: '/' });
          Cookies.remove('userEmail', { path: '/' });
          Cookies.remove('loginTime', { path: '/' });
          router.replace('/auth/login');
          return;
        }
      }

      console.log('AuthGuard: Authenticated, allowing access');
      setIsAuthenticated(true);
      setIsLoading(false);
    };

    // Check auth immediately
    checkAuth();

    // Also check when page becomes visible (tab switching)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkAuth();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [router]);

  // Show loading spinner while checking
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
          <p className="text-gray-600 text-sm">Memverifikasi sesi...</p>
        </div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!isAuthenticated) {
    return null;
  }

  // Show protected content
  return <>{children}</>;
}