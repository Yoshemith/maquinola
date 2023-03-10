import React from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const ItemDetail = ({ product }) => {
  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '25px' }}>
        <h2>Este producto no se encuentra disponible</h2>
      </div>
    );
  }

  const handleFormatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <Box
      maxW="2xl"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      justifyContent="center"
      display="flex"
      flexDirection="row"
    >
      <Box mt="6" alignItems="center">
        <Image
          src={product.imageUrl}
          alt={product.imageUrl}
          p="1"
          height={220}
          width="2xl"
        />
      </Box>

      <Box p="5" display="flex" flexDirection="column">
        <Box display="flex" mt="2" justifyContent="end">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < 5 ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            13 reviews
          </Box>
        </Box>

        <Box
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {product.title}
        </Box>

        <Box mt="2" fontWeight="light" as="h4" lineHeight="tight">
          {product.description}
        </Box>

        <Box mt="3" mb="3">
          {handleFormatPrice(product.price) + ' '}
          <Box as="span" color="gray.600" fontSize="sm">
            USD
          </Box>
        </Box>

        <Box mb="3" as="span" color="gray.600" fontSize="sm">
          En stock: {product.stock}
        </Box>

        <Box mt="4" style={{ margin: 'auto' }}>
          <Button
            colorScheme="yellow"
            variant="solid"
            bgColor={'#ffcb00'}
            color="blackAlpha.800"
          >
            Añadir al carrito
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
