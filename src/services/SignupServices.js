import axios from 'axios';
import { API_BASE_URL,REGISTER_USER } from './Constants';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${REGISTER_USER}`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to register user.');
  }
};


export const checkUserExists = async (email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users?email=${email}`);
    return response.data.length > 0;
  } catch (error) {
    throw new Error('Failed to check if user exists.');
  }
};
