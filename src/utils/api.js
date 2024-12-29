import axios from 'axios';

const API_URL = 'http://localhost:5001'; // Backend server running on port 5001

export const fetchContent = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/api/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return null;
  }
};