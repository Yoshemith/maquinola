import React from 'react';
import { CartWidget } from './CartWidget';
import { Button, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <div>
      <h1>My Ecommerce</h1>
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Products</MenuItem>
          <MenuItem>Categories</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
      <Button colorScheme="blue">Button</Button>
    </div>
  );
};
