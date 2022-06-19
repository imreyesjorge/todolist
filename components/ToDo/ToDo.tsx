import { Box, Checkbox, Heading, Text } from '@chakra-ui/react';
import { TodoProps } from '../../models/TodoModel';

const ToDo = ({ title, body, date }: TodoProps) => {
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
               <Heading fontSize="lg">{title}</Heading>
               <Text fontSize="md">{body}</Text>
            </Box>
            <Text fontSize="xs" color="gray.400">
               {date}
            </Text>
         </Box>
      </Box>
   );
};

export default ToDo;
