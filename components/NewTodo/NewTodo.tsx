import { Box, Button, Input } from '@chakra-ui/react';

const NewTodo = () => {
   return (
      <Box
         p={4}
         borderRadius={8}
         bg="gray.50"
         display="flex"
         flexDirection="column"
         gap={3}>
         <Box display="flex" flexDirection="column" gap={3}>
            <Input placeholder="To-Do Title" bg="white" />
            <Input placeholder="Description" bg="white" />
         </Box>
         <Box display="flex" justifyContent="center" gap={4}>
            <Button>Cancel</Button>
            <Button colorScheme="green">Create</Button>
         </Box>
      </Box>
   );
};

export default NewTodo;
