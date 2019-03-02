import axios from 'axios';

const Service = {
    login:(params)=> {
        return axios.post('/login', params).then(res => res.data);
      },
      register:(params)=>{
          return axios.post('/register',params).then(res => res.data);
      }
}
export default Service;
