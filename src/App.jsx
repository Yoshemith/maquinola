import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={'Welcome'} />
      </ChakraProvider>
    </>
  );
}

export default App;
