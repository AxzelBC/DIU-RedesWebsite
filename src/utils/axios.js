import axios from "axios";

export default axios.create({
    baseURL: 'https://lascilab-backend.herokuapp.com/',
    withCredentials: false,
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'localhost:3000'
    },
});