import { Flex, Spacer, Center, Button, Heading } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

const Nav = () => {
   const { colorMode, toggleColorMode } = useColorMode();

   return (
      <Flex as="nav" p="2">
         <Center>
            <Heading fontSize="lg">To-Do List</Heading>
         </Center>
         <Spacer />
         <Center>
            <Button onClick={toggleColorMode}>
               {colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
         </Center>
      </Flex>
   );
};

export default Nav;
