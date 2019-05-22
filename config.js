export const endpoint = `http://localhost:4444`;
export const productionEndpoint = `https://eps-backend.now.sh`;
export const perPage = 4;
export const backendUrl = process.env.NODE_ENV === 'development' ? endpoint : productionEndpoint;
