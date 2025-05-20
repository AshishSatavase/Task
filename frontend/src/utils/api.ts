import axios from 'axios';
import type { Product, CartItem } from '../types';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Products
  getProducts: async (): Promise<Product[]> => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  },

  // Cart
  getCart: async (): Promise<CartItem[]> => {
    const response = await axios.get(`${API_URL}/cart`);
    return response.data;
  },

  addToCart: async (productId: number): Promise<CartItem[]> => {
    const response = await axios.post(`${API_URL}/cart`, { productId });
    return response.data;
  },

  removeFromCart: async (productId: number): Promise<CartItem[]> => {
    const response = await axios.delete(`${API_URL}/cart/${productId}`);
    return response.data;
  },

  buyCart: async (): Promise<{ message: string }> => {
    const response = await axios.post(`${API_URL}/cart/buy`);
    return response.data;
  },
}; 