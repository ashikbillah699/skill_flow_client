/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER}`
});

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('Adding Token:', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
      }, function(error) {
        const status = error.response.status;
        console.log('interceptors error: ', error);
        if(status === 401 || status === 403){
            useEffect(() => {
                logOut();
                navigate('/login', { replace: true }); 
            }, [logOut, navigate]);
        }
        return Promise.reject(error);
      });

    return axiosSecure;
};

export default useAxiosSecure;