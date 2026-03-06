import axios from 'axios';

const API = axios.create({ baseURL: 'https://aurazy-backend-2.onrender.com/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const fetchProducts = () => API.get('/products');
export const fetchProduct = (id: string) => API.get(`/products/${id}`);
export const createProduct = (newProduct: any) => API.post('/products', newProduct);
export const updateProduct = (id: string, updatedProduct: any) => API.put(`/products/${id}`, updatedProduct);
export const deleteProduct = (id: string) => API.delete(`/products/${id}`);
export const uploadImage = (formData: any) => API.post('/upload', formData);

export const signIn = (formData: any) => API.post('/users/login', formData);
export const signUp = (formData: any) => API.post('/users/register', formData);

export const createPaymentOrder = (orderData: any) => API.post('/payment/create-order', orderData);
export const verifyPayment = (paymentData: any) => API.post('/payment/verify', paymentData);
