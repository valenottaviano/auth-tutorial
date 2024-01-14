// An array of routes that are public. They does not require authentication.

export const publicRoutes = ["/"];

// Routes used for authentication and will redirect to /settings
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
