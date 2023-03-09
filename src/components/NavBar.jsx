import React from 'react';
import { CartWidget } from './CartWidget';
import {
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Box,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <Flex bg="gray.900" w="100%" p={4} color="white" alignItems="center">
      <Spacer />
      <Box p="2">
        <Text fontSize="1xl" fontWeight="bold">
          Maquinola
        </Text>
      </Box>
      <Spacer />
      <Box color="black" p="2">
        <Menu>
          <MenuButton as={Button} w="50">
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>Bulldozers</MenuItem>
            <MenuItem>Excavators</MenuItem>
            <MenuItem>Loaders</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box p="2">
        <CartWidget />
      </Box>
      <Spacer />
    </Flex>
  );
};
