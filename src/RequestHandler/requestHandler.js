import axios from 'axios';
 
export default axios.create({
    baseURL: 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&namespace=0&limit=10',
    headers: {
            "Access-Control-Allow-Origin": "*" ,
            crossOrigin: true,
            "Content-Type": 'application/json;charset=utf-8'
    }
});
