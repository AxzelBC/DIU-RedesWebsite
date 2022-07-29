import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'localhost:3000'
    },
});