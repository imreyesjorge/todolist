import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { NewTodoProps } from '../../models/TodoModel';

const NewTodo = ({ handleVisibility }: NewTodoProps) => {
   const [content, setContent] = useState({ title: '', body: '' });

   const clearContent = () => {
      setContent({ title: '', body: '' });
      handleVisibility(false);
   };

   const onCreate = () => {
      clearContent();
   };

   return (
      <Box
         p={4}
         borderRadius={8}
         bg="gray.50"
         display="flex"
         flexDirection="column"
         gap={3}>
         <Box display="flex" flexDirection="column" gap={3}>
            <Input
               placeholder="To-Do Title"
               bg="white"
               value={content.title}
               onChange={(event) => {
                  setContent({ ...content, title: event.target.value });
               }}
            />
            <Input
               placeholder="Description"
               bg="white"
               value={content.body}
               onChange={(event) => {
                  setContent({ ...content, body: event.target.value });
               }}
            />
         </Box>
         <Box display="flex" justifyContent="center" gap={4}>
            <Button onClick={clearContent}>Cancel</Button>
            <Button onClick={onCreate} colorScheme="green">
               Create
            </Button>
         </Box>
      </Box>
   );
};

export default NewTodo;
