import axios from 'axios';
import users from '../mockdata/usersdata.json';
import { API_BASE_URL, REGISTER_USER } from './Constants';

export async function loginApi(credentials, setAuth) {
    const url = `${API_BASE_URL}${REGISTER_USER}`;

    try {
        const { email, password } = credentials;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Simulate API call with delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Successful login
            setAuth(true); // Set authentication status in the Login component
            return { success: true, user };
        } else {
            // Unsuccessful login
            throw new Error('Invalid email or password');
        }

    } catch (error) {
        // Handle any error that occurred during login
        throw new Error('Login failed');
    }
}
