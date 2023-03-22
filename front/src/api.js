import axios from 'axios';

const API_URL = 'https://mi-api.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}