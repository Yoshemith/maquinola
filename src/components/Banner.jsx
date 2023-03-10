import React from 'react';
import { Box } from '@chakra-ui/react';

export const Banner = () => {
  return (
    <>
      <Box
        bg={'#f48d36'}
        w="100%"
        p={1}
        color="blackAlpha.800"
        fontWeight="normal"
        as="h4"
        noOfLines={1}
        display="flex"
        justifyContent="center"
      >
        Promotions and discounts banner
      </Box>
    </>
  );
};
