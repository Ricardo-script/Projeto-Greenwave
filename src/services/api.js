import axios from 'axios';

const api = axios.create({
    baseURL:'https://teste-selecao.herokuapp.com/greenwave/logs'
});


export default api;