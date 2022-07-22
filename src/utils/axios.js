import axios from "axios";

export default axios.create({
    baseURL: 'https://lascilab-backend.herokuapp.com/',
    withCredentials: true
});