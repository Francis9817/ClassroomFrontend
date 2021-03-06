const HOST = 'http://localhost:3000';

export const environment = {
  production: false,
  HOST,
  STORAGE_URL: HOST + '/storage',
  // URL_PUBLIC,
  URL_PRIVATE: HOST,
  API_URL_PRIVATE: HOST + '/api/v1/private',
  API_URL_PUBLIC: HOST + '/api/v1/public',
  VERSION: '1.0.1',
};
