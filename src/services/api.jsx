import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/marieleribeiro/currency-json-server/'  
});


export default api;