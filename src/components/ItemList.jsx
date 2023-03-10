import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Item } from './Item';

export const ItemList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '25px' }}>
        <h2>No hay productos disponibles</h2>
      </div>
    );
  }

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            stock={item.stock}
            category={item.category}
            imageUrl={item.imageUrl}
          />
        ))}
      </Grid>
    </>
  );
};
