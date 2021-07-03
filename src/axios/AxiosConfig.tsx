import axios from 'axios';

const token = localStorage.getItem("Authorization")

const AxiosConfig = axios.create({
    //baseURL: 'https://coupons-back-mysql-jwt.herokuapp.com',
    baseURL: 'http://localhost:8080',
    headers: token === '' ?
        {"Content-Type": "application/json"} :
        {
            "Authorization": token,
            "Content-Type": "application/json"
        }
});

export default AxiosConfig;