import { Box, Input, Button } from '@chakra-ui/react';

const EditModal = ({ _id, newTitle, newBody }) => {
   return (
      <Box
         as="section"
         width="100%"
         height="100vh"
         position="absolute"
         top={0}
         left={0}
         p={4}
         borderRadius={8}
         bg="gray.50"
         display="flex"
         justifyContent="center"
         flexDirection="column">
         <Box>
            <Box display="flex" flexDirection="column" gap={3} mb={4}>
               <Input placeholder="New Title" bg="white" />
               <Input placeholder="New Description" bg="white" />
            </Box>
            <Box display="flex" justifyContent="center" gap={4}>
               <Button>Cancel</Button>
               <Button colorScheme="blue">Update</Button>
            </Box>
         </Box>
      </Box>
   );
};

export default EditModal;
