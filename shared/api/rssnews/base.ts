import axios, { AxiosError, AxiosResponse } from 'axios';

import { XMLParser } from 'fast-xml-parser';

const API_URL = 'https://rss.nytimes.com/services/xml/rss/nyt';

export const apiInstance = axios.create({
  baseURL: API_URL,
});

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const parser = new XMLParser();
    response.data = !response.data ? {} : parser.parse(response.data);
    return response;
  },
  (error: AxiosError) => Promise.reject(error),
);
