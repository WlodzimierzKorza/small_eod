import axios from 'axios';

const instance = axios.create({
    baseURL:'http://backend.dev.small-eod.siecobywatelska.pl/api/',
    auth: {
        userName: 'root',
        password: 'root'
}
})

export default instance