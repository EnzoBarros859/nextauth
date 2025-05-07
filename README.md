# Next.js Authentication with NextAuth.js and Prisma

A modern authentication system built with Next.js 14, NextAuth.js, and Prisma, featuring a clean and responsive UI.

## Features

- 🔐 **Authentication**
  - Email/Password authentication
  - OAuth providers (GitHub, Google)
  - Protected routes
  - Session management
  - Secure password hashing

- 🎨 **Modern UI**
  - Responsive design
  - Dark/Light mode support
  - Clean and intuitive interface
  - Loading states and animations

- 🛠 **Tech Stack**
  - Next.js 14 (App Router)
  - NextAuth.js for authentication
  - Prisma for database management
  - PostgreSQL database
  - TypeScript for type safety
  - Tailwind CSS for styling

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextauth-nextjs14-prisma
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"

   # OAuth Providers (Optional)
   GITHUB_ID="your-github-client-id"
   GITHUB_SECRET="your-github-client-secret"
   GOOGLE_ID="your-google-client-id"
   GOOGLE_SECRET="your-google-client-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   ├── auth/        # Authentication endpoints
│   │   ├── register/    # Registration endpoint
│   │   └── session/     # Session management
│   ├── login/           # Login page
│   ├── register/        # Registration page
│   └── profile/         # User profile page
├── components/          # Reusable components
├── lib/
│   ├── auth/           # Authentication configuration
│   ├── prisma/         # Database client
│   └── validations/    # Input validation schemas
├── prisma/
│   └── schema.prisma   # Database schema
└── public/
    └── images/         # Static images
```

## Authentication Flow

1. **Registration**
   - User submits registration form
   - Input validation using Zod
   - Password hashing with bcrypt
   - User creation in database

2. **Login**
   - Email/Password authentication
   - OAuth provider authentication
   - Session creation
   - JWT token generation

3. **Protected Routes**
   - Session verification
   - Route protection
   - Automatic redirect to login

## API Routes

- `POST /api/register` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js endpoints
- `GET /api/session` - Session management

## Database Schema

The application uses the following main models:
- User
- Account (OAuth)
- Session
- VerificationRequest

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/) 