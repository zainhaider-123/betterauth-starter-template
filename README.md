# Better Auth Starter Template

A starter template for building authentication systems with Better Auth, featuring basic email and password login and signup functionality. This project integrates Drizzle ORM with PostgreSQL and uses Shadcn UI components for a modern, responsive interface.

## Features

- **Authentication**: Email and password login/signup with Better Auth
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Components**: Shadcn UI for consistent and accessible components
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS for utility-first styling
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Better Auth](https://www.better-auth.com/) - Authentication library
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe SQL query builder
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd betterauth-starter-template
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up your database:
   - Update the database connection in `lib/db.ts`
   - Ensure PostgreSQL is running

4. Generate authentication keys:
   ```bash
   pnpm dlx auth@latest generate
   ```

5. Generate database migration:
   ```bash
   pnpm dlx drizzle-kit generate
   ```

6. Push the migration to the database:
   ```bash
   npx drizzle-kit push
   ```

### Running the Application

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - Reusable UI components
- `src/lib/` - Utility functions and configurations
  - `auth.ts` - Better Auth configuration
  - `db.ts` - Database connection
  - `schema.ts` - Database schema definitions
- `drizzle.config.ts` - Drizzle configuration

## Usage

The application includes:

- **Login Page** (`/login`) - Sign in with email and password
- **Signup Page** (`/signup`) - Create a new account
- **Home Page** (`/`) - Protected dashboard (requires authentication)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
