import { GET_USER, LOGOUT } from '../actions/types';

const initialState = {
    user: null,
    isAuthenticated: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
}
