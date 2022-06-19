import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, props }) => {
   return (
      <ChakraProvider>
         <Component {...props} />
      </ChakraProvider>
   );
};

export default App;
