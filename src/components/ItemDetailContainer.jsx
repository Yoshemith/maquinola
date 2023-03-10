import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { ItemDetail } from './ItemDetail';
import jsonData from '../data.json';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(jsonData);
      }, 1000);
    });

    getProducts.then((result) => {
      setProductData(result);
    });
  }, []);

  const product = productData.find((item) => item.id === productId);

  if (productData.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '25px' }}>Loading...</div>
    );
  }

  return (
    <Container
      p={10}
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      maxWidth={{ base: '100%', md: '100%', lg: '100%' }}
    >
      <ItemDetail product={product} />
    </Container>
  );
};
