import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import jsonData from '../data.json';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(jsonData);
      }, 3000);
    });

    getProducts.then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '25px' }}>
      <ItemList products={products} />
    </div>
  );
};
