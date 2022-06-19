import { Flex, Spacer, Center, Button, Text } from '@chakra-ui/react';

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
            <Button>Toggle Theme</Button>
         </Center>
      </Flex>
   );
};

export default Nav;
