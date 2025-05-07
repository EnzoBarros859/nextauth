import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Secure User Authentication Made Simple
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Experience seamless authentication with our modern, secure, and user-friendly solution. 
                Built with Next.js 14 and NextAuth.js for maximum reliability and performance.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/login" className="btn-primary bg-white text-blue-600 hover:bg-blue-50">
                  Sign In Now
                </Link>
                <Link href="/register" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white/10">
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our Authentication?</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our authentication system provides everything you need to secure your application 
              while delivering an exceptional user experience.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="text-blue-600 text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
                <p className="text-gray-600">Advanced security features including JWT encryption, CSRF protection, and secure session management</p>
              </div>
              <div className="card">
                <div className="text-blue-600 text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast Performance</h3>
                <p className="text-gray-600">Optimized for speed with server-side rendering and edge functions for instant authentication</p>
              </div>
              <div className="card">
                <div className="text-blue-600 text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-gray-600">Easy setup with multiple providers including Google, GitHub, and custom credentials</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
