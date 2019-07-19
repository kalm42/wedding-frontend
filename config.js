export const endpoint = process.env.GATSBY_BACKEND_URL;
export const productionEndpoint = `https://wedding-backend.now.sh`;
export const perPage = 4;
export const backendUrl = process.env.NODE_ENV === 'development' ? endpoint : productionEndpoint;
export const SENTRY_DSN = process.env.GATSBY_SENTRY_DSN;
export const SENTRY_RELEASE = process.env.GATSBY_SENTRY_RELEASE;
export const STRIPE_KEY = process.env.GATSBY_STRIPE_KEY;
