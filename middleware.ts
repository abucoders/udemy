import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Intl middleware
const intlMiddleware = createMiddleware(routing);

// Route matcher for protected routes
const isProtectedRoute = createRouteMatcher(["/:locale/(.)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  return intlMiddleware(req);
});

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)", "/(api|trpc)(.*)"],
};
