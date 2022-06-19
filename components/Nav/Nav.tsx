import { Flex, Spacer, Center, Button, Heading } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

const Nav = () => {
   return (
      <Flex as="nav" p="2">
         <Center>
            <Heading fontSize="lg">To-Do List</Heading>
         </Center>
         <Spacer />
         <Center>
            <Button>
               <MoonIcon />
            </Button>
         </Center>
      </Flex>
   );
};

export default Nav;
