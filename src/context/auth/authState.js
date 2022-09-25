import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_CLOSE,
    AUTENTICATE_USER,
    AUTENTICATE_USER_ERROR,
    SET_SOCKECT,
    CLEAR_ALERT,
    SET_INFO_PERMISSION,
    SET_INFO_PERMISSION_ERROR,
    SET_AUTORIZATE
} from './../../types';

import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AutState = ({children}) => {

    //definir state
    const initialState = {
        token : typeof window !== 'undefined' ? localStorage.getItem("token") : '',
        user: null,
        message: '',
        authorized: false,
        sockect: '',
        authenticate: null,
        infopermission: null,
    }

    //definir reducer
    const  [ state, dispatch ] = useReducer(authReducer, initialState);

    //registrar Usuario

    const userRegister = async data => {
        try {
             const resultado = await axiosClient.post('/api/users', data);
             dispatch({
                type: REGISTER_SUCCESS,
                payload: resultado.data
            });

        } catch (error) {
            dispatch({
                type: REGISTER_ERROR,
                payload: error.response.data.message
            });
            
        }

        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT,
                payload: null
            });
            
        }, 3000);
    }

    const loginUser  = async datos => {

        try {
            const resultado = await axiosClient.post('/api/auth', datos);

            dispatch({
               type: LOGIN_SUCCESS,
               payload: resultado.data
           });

       } catch (error) {
           dispatch({
               type: LOGIN_ERROR,
               payload: error.response.data.message
           });
           
       }

    }

    const getInfoPermission  = async id => {

        try {
            const resultado = await axiosClient.get(`/api/sockect/${id}`);

            dispatch({
               type: SET_INFO_PERMISSION,
               payload: resultado.data.data
           });

       } catch (error) {
           dispatch({
               type: SET_INFO_PERMISSION_ERROR,
               payload: error.response.data.message
           });
           
       }

    }

    const setPermission  = async id => {

        try {
            const token = localStorage.getItem("token");
            if(token) tokenAuth(token);
            const resultado = await axiosClient.post(`/api/sockect`, {sockectId: id});

            dispatch({
                type: LOGIN_SUCCESS,
                payload: resultado.data
            });

       } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.message
            });
       }

    }

    

    const autenticateUser = async () => {

        const token = localStorage.getItem("token");
        if(token) tokenAuth(token);

        try {
            const resultado = await axiosClient.get('/api/auth');
            if(resultado.data){
                dispatch({
                    type: AUTENTICATE_USER,
                    payload: resultado.data
                });
            }

       } catch (error) {
           dispatch({
               type: AUTENTICATE_USER_ERROR,
               payload: error.response.data.message
           });
           
       }
        
    }

    const loginClose = async () => {

        dispatch({
            type: LOGIN_CLOSE,
        });
    }

    const setSockect = async(id) => {

        dispatch({
            type: SET_SOCKECT,
            payload: id
        });
    }

    const userAuthorized = async() => {

        dispatch({
            type: SET_AUTORIZATE,
        });
    }
    


    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticate: state.authenticate,
                user: state.user,
                sockect:state.sockect,
                message: state.message,
                infopermission: state.infopermission,
                authorized: state.authorized,
                userAuthorized,
                userRegister,
                loginUser,
                autenticateUser,
                loginClose,
                setSockect,
                getInfoPermission,
                setPermission
            }}
         >
             {children}
        </authContext.Provider>
    )

}

export default AutState;