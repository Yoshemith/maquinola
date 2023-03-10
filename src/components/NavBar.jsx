import React from 'react';
import { Link } from 'react-router-dom';
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
import { ChevronDownIcon } from '@chakra-ui/icons';

import logo from '../assets/Maquinola.png';

export const NavBar = () => {
  return (
    <Flex
      bg="gray.900"
      w="100%"
      color="white"
      alignItems="center"
      justifyContent="space-between"
    >
      <Spacer />
      <Box
        display="flex"
        alignItems="center"
        width="150px"
        justifyContent="center"
      >
        <Link to={'/'}>
          <Box as="img" src={logo} alt="Logo" h="100px" mr="4" />
        </Link>
      </Box>
      <Spacer />
      <Box
        color="black"
        display="flex"
        alignItems="center"
        width="150px"
        justifyContent="center"
      >
        <Menu>
          <MenuButton
            as={Button}
            w="50"
            bgColor={'#ffcb00'}
            rightIcon={<ChevronDownIcon />}
          >
            Categories
          </MenuButton>
          <MenuList>
            <Link to={`/category/${'Montacargas'}`}>
              <MenuItem>Montacargas</MenuItem>
            </Link>
            <Link to={`/category/${'Elevadores-Tijera'}`}>
              <MenuItem>Elevadores Tijera</MenuItem>
            </Link>
            <Link to={`/category/${'Brazos-Articulados'}`}>
              <MenuItem>Brazos Articulados</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box
        display="flex"
        alignItems="center"
        width="150px"
        justifyContent="center"
      >
        <CartWidget />
      </Box>
      <Spacer />
    </Flex>
  );
};
