import { auth, signOut } from '@/lib/auth/config';
import Link from 'next/link';

const Header = async () => {
  const session = await auth();
  const user = session?.user;

  const logoutAction = async () => {
    'use server';
    await signOut();
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="h-16 flex justify-between container items-center">
        <div>
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            AuthApp
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Dashboard
            </Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link 
                  href="/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Create Account
                </Link>
              </li>
            </>
          ) : (
            <form action={logoutAction} className="flex items-center space-x-6">
              
              <li>
                <Link href="/profile" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Account Settings
                </Link>
              </li>
              <li>
                <button 
                  type="submit"
                  className="text-red-600 hover:text-red-700 font-medium transition-colors"
                >
                  Sign Out
                </button>
              </li>
            </form>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
