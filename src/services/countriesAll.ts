import axios from 'axios';
import { apiUrl } from './apiUrl';
import { Countries } from '../types/countries';

export const countriesAll = async (): Promise<Countries[]> => {
  const response = await axios.get<Countries[]>(`${apiUrl}/all`);
  return response.data;
};
