import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://dummyjson.com/products'
});

export default customAxios;
