import axios from 'axios';
import {ServerURL} from "../enums/ServerURL";

const token = localStorage.getItem("Authorization");

const AxiosConfig = axios.create({

    baseURL: ServerURL.baseAddress,

    headers: token === '' ?
        {"Content-Type": "application/json"} :
        {
            "Authorization": token,
            "Content-Type": "application/json"
        }
});

export default AxiosConfig;