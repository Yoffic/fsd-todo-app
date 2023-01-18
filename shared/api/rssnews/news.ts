import type { AxiosPromise } from 'axios';
import { apiInstance } from './base';
import { Rss } from './model';

const BASE_URL = '/HomePage.xml';

export const getRssNews = (): AxiosPromise<Rss> => {
  return apiInstance.get(BASE_URL);
};
