import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const api = {
  getProducts() {
    return instance.get('/products');
  },
  getProductById(id: string | undefined) {
    return instance.get(`/products/${id}`);
  },
};

// const request = await fetch('https://mock.shop/api?query=');
// const response = await request.json();
// console.log(response);
