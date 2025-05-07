/**
 * NextAuth.js API Route Handler
 * 
 * This file handles all authentication-related API routes for NextAuth.js.
 * It exports the GET and POST handlers that manage authentication requests.
 * 
 * @see https://next-auth.js.org/configuration/initialization#route-handlers
 */

import { handlers } from '@/lib/auth/config';

export const { GET, POST } = handlers;
