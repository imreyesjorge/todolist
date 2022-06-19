import { Box, Checkbox, Heading, Text } from '@chakra-ui/react';

const ToDo = () => {
   return (
      <Box
         as="article"
         border="1px"
         borderColor="gray.200"
         p={4}
         borderRadius={8}
         display="flex"
         alignItems="start"
         gap={2}>
         <Checkbox mt={1} />
         <Box>
            <Box mb={3}>
               <Heading fontSize="lg">To-Do Title</Heading>
               <Text fontSize="md">To-Do Body Text</Text>
            </Box>
            <Text fontSize="xs" color="gray.400">
               {Date()}
            </Text>
         </Box>
      </Box>
   );
};

export default ToDo;
