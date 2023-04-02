import axios from 'axios';

export const API_BASE_URL = 'https://inspiration-quotes.fly.dev/api';

export const initFetchInstance = (baseURL: string) =>
  axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      Accept: 'application/json',
    },
  });

export const fetchInstance = () => initFetchInstance(API_BASE_URL);
