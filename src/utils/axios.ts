import axios, { AxiosInstance } from 'axios';

export const initFetchInstance = (): AxiosInstance =>
  axios.create({
    timeout: 10000,
    headers: {
      Accept: 'application/json',
    },
  });
