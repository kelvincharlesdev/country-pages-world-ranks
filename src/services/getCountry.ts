import axios from 'axios';
import { apiUrl } from './apiUrl';

export const getCountry = async (country: string) => {
  const response = await axios.get(`${apiUrl}/name/${country}`);
  return response.data;
};
