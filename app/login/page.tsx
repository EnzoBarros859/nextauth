import Header from '@/components/header';
import { LoginForm } from './login-form';
import { Suspense } from 'react';
import Link from 'next/link';

export default async function LoginPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
              <p className="text-gray-600 mt-2">Sign in to access your account and manage your settings</p>
            </div>
            
            <div className="card">
              <Suspense fallback={
                <div className="flex justify-center items-center h-48">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              }>
                <LoginForm />
              </Suspense>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  New to our platform?{' '}
                  <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                    Create your account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
