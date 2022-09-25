import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_CLOSE,
    AUTENTICATE_USER,
    AUTENTICATE_USER_ERROR,
    SET_SOCKECT,
    SET_INFO_PERMISSION,
    SET_INFO_PERMISSION_ERROR,
    CLEAR_ALERT,
    SET_AUTORIZATE
} from './../../types';


export default ( state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                token: action.payload.token,
                type: 'success'
            }
        case REGISTER_ERROR:
            return {
                ...state,
                message: action.payload,
                type: 'danger'
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                message: action.payload.message,
                type: 'success',
                authenticate: true,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                message: action.payload,
                authenticate: false,
                type: 'danger'
            }

        case CLEAR_ALERT:
            return {
                ...state,
                message: '',
        }
        case LOGIN_CLOSE:
            localStorage.removeItem("token");
            return {
                ...state,
                user: null,
                message: null,
                token: null,
                authenticate: false
            }
        case AUTENTICATE_USER:
            return {
                ...state,
                user: action.payload,
                authenticate: true,
            }
        case AUTENTICATE_USER_ERROR:
            return {
                ...state,
                user: null,
                authenticate: false,
            }

        case SET_AUTORIZATE:
            return {
                ...state,
                authorized: true,
            }

        case SET_SOCKECT:
            return {
                ...state,
                sockect: action.payload,
            }

        case SET_INFO_PERMISSION:
            return {
                ...state,
                infopermission: action.payload,
            }

        case SET_INFO_PERMISSION_ERROR:
            return {
                ...state,
                infopermission: null,
            }
            
            
        default:
            return state;
    }
}