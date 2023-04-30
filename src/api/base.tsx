import axios from 'axios';

export const API_BASE_URL = 'https://chat-lotto-ai.fly.dev/api';
// export const API_BASE_URL = 'http://10.0.2.2:3001/api';

export const initFetchInstance = (baseURL: string) =>
  axios.create({
    baseURL,
    timeout: 20000,
    headers: {
      Accept: 'application/json',
    },
  });

export const fetchInstance = () => initFetchInstance(API_BASE_URL);
