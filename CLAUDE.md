# Boto Finance Development Guide

## Build Commands
- **Development server**: `bun dev` or `npm run dev`
- **Build for production**: `bun build` or `npm run build`
- **Lint code**: `bun lint` or `npm run lint`

## Database Commands
- **Generate migrations**: `bun db:generate` or `npm run db:generate`
- **Run migrations**: `bun db:migrate` or `npm run db:migrate`
- **Drizzle Studio**: `bun db:studio` or `npm run db:studio`

## Code Style Guidelines
- **TypeScript**: Strict typing with ES2017 target
- **Linting**: ESLint with Next.js recommended configs
- **Formatting**: 2-space indentation, sort imports on save
- **Components**: Use shadcn/ui with Tailwind CSS
- **State Management**: React Query for server state, React Hook Form + Zod for forms
- **Project Structure**: Features-based organization in `/features` directory
- **Path Aliases**: `@/components`, `@/lib`, `@/hooks`, `@/features`
- **API Routes**: Hono for API handlers
- **Auth**: Clerk for authentication
- **Database**: Drizzle ORM with PostgreSQL