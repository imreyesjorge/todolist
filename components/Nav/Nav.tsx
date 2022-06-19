import { Flex, Spacer, Center, Button, Text } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

const Nav = () => {
   return (
      <Flex as="nav" p="2">
         <Center>
            <Text fontSize="lg" fontWeight="bold">
               To-Do List
            </Text>
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
