import axios from 'axios';
import { GET_USER, LOGOUT } from './types';

export const getUser = (token) => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/auth/user', {
            headers: {
                'x-auth-token': token,
            },
        });
        dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const logout = () => async (dispatch) => {
    try {
        await axios.get('http://localhost:5000/auth/logout');
        dispatch({ type: LOGOUT });
    } catch (err) {
        console.error(err);
    }
};
