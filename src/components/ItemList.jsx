import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Item } from './Item';

export const ItemList = ({ products }) => {
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
