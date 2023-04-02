import axios from 'axios';

export const API_BASE_URL =
  process.env.REACT_APP_ENV === 'dev'
    ? 'http://localhost:3001/api'
    : 'https://inspiration-quotes.fly.dev/api';

export const initFetchInstance = (baseURL: string) =>
  axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      Accept: 'application/json',
    },
  });

export const fetchInstance = () => initFetchInstance(API_BASE_URL);
