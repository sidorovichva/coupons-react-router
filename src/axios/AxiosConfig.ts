import axios from 'axios';
import {ServerURL} from "../enums/ServerURL";

const AxiosConfig = axios.create({
    baseURL: ServerURL.baseAddress,
    headers: {"Content-Type": "application/json"}
});

export default AxiosConfig;

AxiosConfig.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("Authorization");
        if (token) config.headers.authorization = token;
        return config;
    },
    (error) => Promise.reject(error),
);

// import axios from 'axios';
// import {ServerURL} from "../enums/ServerURL";
//
// const token = localStorage.getItem("Authorization");
//
// const AxiosConfig = axios.create({
//
//     baseURL: ServerURL.baseAddress,
//
//     headers: token === '' ?
//         {"Content-Type": "application/json"} :
//         {
//             "Authorization": token,
//             "Content-Type": "application/json"
//         }
// });
//
// export default AxiosConfig;