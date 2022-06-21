import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { NewTodoProps } from '../../models/TodoModel';

const NewTodo = ({ handleVisibility, handleCreate }: NewTodoProps) => {
   const [content, setContent] = useState({ title: '', body: '' });

   const clearContent = () => {
      setContent({ title: '', body: '' });
      handleVisibility(false);
   };

   const onCreate = () => {
      const currentDate = new Date();

      handleCreate(content.title, content.body, currentDate.toDateString());
      clearContent();
   };

   return (
      <Box p={4} borderRadius={8} display="flex" flexDirection="column" gap={3}>
         <Box display="flex" flexDirection="column" gap={3}>
            <Input
               placeholder="To-Do Title"
               value={content.title}
               onChange={(event) => {
                  setContent({ ...content, title: event.target.value });
               }}
            />
            <Input
               placeholder="Description"
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
