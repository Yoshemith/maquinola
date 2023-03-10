import React from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const Item = ({
  id,
  title,
  description,
  price,
  stock,
  category,
  imageUrl,
}) => {
  const handleFormatPrice = (price) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Box mx="auto">
        <Image src={imageUrl} alt={imageUrl} p="4" height={185} />
      </Box>

      <Box p="5">
        <Box display="flex" mt="2" justifyContent="center">
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
          {title}
        </Box>

        <Box>
          {handleFormatPrice(price) + ' '}
          <Box as="span" color="gray.600" fontSize="sm">
            USD
          </Box>
        </Box>

        <Box mt="4">
          <Button
            colorScheme="yellow"
            variant="solid"
            bgColor={'#ffcb00'}
            color="blackAlpha.800"
          >
            Ver detalles
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
