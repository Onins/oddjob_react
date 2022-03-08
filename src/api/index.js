import axios from 'axios';
import {HOST_URL} from './constants'

export default axios.create({
    baseURL: HOST_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});