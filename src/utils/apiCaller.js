import axios from 'axios';
import * as Config from './../contains/Config';

const callAPI = (endpoint, method = 'GET', body) => axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body
}).catch((err)=>{
    console.log(err);    
});

export default callAPI;