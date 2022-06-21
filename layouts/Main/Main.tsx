import { Box } from '@chakra-ui/react';
import Nav from '../../components/Nav/Nav';

const Main = ({ children }) => {
   return (
      <>
         <Nav />
         <Box as="main" p={4}>
            {children}
         </Box>
      </>
   );
};

export default Main;
