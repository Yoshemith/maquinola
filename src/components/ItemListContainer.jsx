import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import jsonData from '../data.json';

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(jsonData);
      }, 2000);
    });

    getProducts.then((result) => {
      setProducts(result);
    });
  }, []);

  const filteredCategories = products.filter(
    (item) => item.category === category,
  );

  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '25px' }}>Loading...</div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '25px' }}>
      {category ? (
        <ItemList products={filteredCategories} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};
