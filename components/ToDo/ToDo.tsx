import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
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
         justifyContent="space-between"
         alignItems="start"
         gap={2}>
         <Box>
            <Box>
               <Heading fontSize="lg" textDecoration={status && 'line-through'}>
                  {title}
               </Heading>
               <Text
                  fontSize="md"
                  textDecoration={status && 'line-through'}
                  mb={3}>
                  {body}
               </Text>
               <Text fontSize="xs" color="gray.400">
                  {date}
               </Text>
            </Box>
         </Box>
         <Box display="flex" gap={2}>
            <Button>
               <EditIcon />
            </Button>
            <Button>
               <DeleteIcon />
            </Button>
         </Box>
      </Box>
   );
};

export default ToDo;
