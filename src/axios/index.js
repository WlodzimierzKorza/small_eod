import axios from 'axios';

const instance = axios.create({
    baseURL:'http://backend.dev.small-eod.siecobywatelska.pl/api',
    headers:{
        'Access-Control-Allow-Origin': '*',
    }

})

export default instance