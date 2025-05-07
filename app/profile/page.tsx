import { auth } from "@/lib/auth/config";
import Header from "@/components/header";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/api/auth/signin");
  }

  const user = session?.user;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
              <p className="text-gray-600 mt-2">Manage your profile and security preferences</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile Card */}
              <div className="md:col-span-1">
                <div className="card">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={user?.image ? user.image : "/images/default.png"}
                        alt={`Profile photo of ${user?.name}`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
                    <p className="text-gray-600">{user?.email}</p>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div className="md:col-span-2">
                <div className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Account ID</label>
                      <p className="mt-1 text-gray-900">{user?.id}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <p className="mt-1 text-gray-900">{user?.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>
                      <p className="mt-1 text-gray-900">{user?.email}</p>
                    </div>
                    <button className="btn-secondary w-full mt-4">
                      Edit Personal Information
                    </button>
                  </div>
                </div>

                {/* Security Section */}
                <div className="card mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
                  <div className="space-y-4">
                    <button className="btn-secondary w-full">
                      Update Password
                    </button>
                    <button className="btn-secondary w-full">
                      Enable Two-Factor Authentication
                    </button>
                    <button className="btn-secondary w-full">
                      Manage Connected Accounts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
