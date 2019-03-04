import axios from 'axios';

const Service = {
    login: (params) => {
        return axios.post('/login', params).then(res => res.data);
    },
    register: (params) => {
        return axios.post('/register', params).then(res => res.data);
    },
    getUserMsg: () => {
        return axios.get('/user_msg').then(res => res.data);
    },
    setUserTheme: (params) => {
        return axios.post('/user_theme', params).then(res => res.data);
    },
    getUserTheme: (params) => {
        return axios.post('/user_theme', params).then(res => res.data);
    },
    saveProfile: (params) => {
        return axios.post('/user_profile',params).then(res => res.data);
    },
    getProfile: (params) => {
        return axios.post('/user_profile',params).then(res => res.data);
    },
    selectAvatar:(params)=>{
        return axios.post('/user_avatar',params).then(res => res.data);
    },
    getAvatar:(params)=>{
        return axios.post('/user_avatar',params).then(res => res.data);
    }
}
export default Service;