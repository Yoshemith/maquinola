import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';
import { Banner } from './components/Banner';

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <Banner />
        <ItemListContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
