import users from '../mockdata/users.json';
import { API_BASE_URL, LOGIN_ENDPOINT } from './Constants';
// import loginUsers from '../mockdata/loginUsers.json'

export function login(credentials) {
    const url = `${API_BASE_URL}${LOGIN_ENDPOINT}`;
    // Simulate the API call by checking credentials against the JSON data
    return new Promise((resolve, reject) => {
      const { email, password } = credentials;
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        // Successful login
        resolve({ success: true, user });
      } else {
        // Unsuccessful login
        reject({ success: false, message: 'Invalid email or password' });
      }
    });
  }