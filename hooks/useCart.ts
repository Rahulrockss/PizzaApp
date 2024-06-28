// src/hooks/useCart.ts
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_KEY = 'cart';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem(CART_KEY);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };

    loadCart();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return { cart, addToCart };
};
