import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import ToDo from '../components/ToDo/ToDo';
import Main from '../layouts/Main/Main';

const Index = () => {
   const [tasks, setTasks] = useState([1, 2, 3, 4]);
   const [isCreateMode, setIsCreateMode] = useState(false);

   const onCreateNewTodoClick = () => {
      setIsCreateMode(true);
   };

   // Create New To-Do button
   const createNewTodo = (
      <Button
         size="lg"
         rightIcon={<PlusSquareIcon />}
         onClick={onCreateNewTodoClick}>
         Create a To-Do
      </Button>
   );

   // Create New To-Do template
   const createNewTodoTemplate = (
      <ToDo
         title="To-Do Title"
         body="Brief description of the To-Do"
         date="2022, May 12"
      />
   );

   return (
      <Main>
         <Box display="flex" flexDirection="column" gap={4}>
            {tasks.map((index, task) => (
               <ToDo
                  title="First To-Do"
                  body="This is the body of my first To-Do task"
                  date="2022, May 12"
                  key={index}
               />
            ))}
            {isCreateMode ? createNewTodoTemplate : createNewTodo}
         </Box>
      </Main>
   );
};

export default Index;
