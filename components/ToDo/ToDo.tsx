import {
   ArrowDownIcon,
   ArrowUpIcon,
   DeleteIcon,
   EditIcon,
} from '@chakra-ui/icons';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { ACTIONS, TodoProps } from '../../models/TodoModel';

const ToDo = ({
   _id,
   title,
   body,
   date,
   index,
   onDelete,
   onEdit,
   onPositionChange,
}: TodoProps) => {
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
            <Box flexGrow={1}>
               <Heading fontSize="lg">{title}</Heading>
               <Text fontSize="md" mb={3}>
                  {body}
               </Text>
            </Box>
            <Text fontSize="xs" color="gray.400">
               {date}
            </Text>
         </Box>
         <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={2}>
               <Button
                  onClick={() => {
                     onEdit(_id, title, body);
                  }}>
                  <EditIcon />
               </Button>
               <Button
                  onClick={() => {
                     onDelete(_id);
                  }}>
                  <DeleteIcon />
               </Button>
            </Box>
            <Box display="flex" gap={2}>
               <Button
                  onClick={() => {
                     onPositionChange(ACTIONS.UP, index);
                  }}>
                  <ArrowUpIcon />
               </Button>
               <Button
                  onClick={() => {
                     onPositionChange(ACTIONS.DOWN, index);
                  }}>
                  <ArrowDownIcon />
               </Button>
            </Box>
         </Box>
      </Box>
   );
};

export default ToDo;
