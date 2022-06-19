import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import NewTodo from '../components/NewTodo/NewTodo';
import ToDo from '../components/ToDo/ToDo';
import Main from '../layouts/Main/Main';
import EditModal from '../components/EditModal/EditModal';

const Index = () => {
   const [tasks, setTasks] = useState([]);
   const [isCreateMode, setIsCreateMode] = useState(false);

   const onCreateNewTodoClick = () => {
      setIsCreateMode(true);
   };

   const onCreateNewTodo = (
      _id: string,
      title: string,
      body: string,
      date: string,
   ) => {
      setTasks([...tasks, { _id, title, body, date }]);
   };

   const onTodoDelete = (_id: string) => {
      setTasks(
         tasks.filter((task) => {
            return task._id != _id;
         }),
      );
   };

   // Create New To-Do button
   const createNewTodoComponent = (
      <Button
         size="lg"
         rightIcon={<PlusSquareIcon />}
         onClick={onCreateNewTodoClick}>
         Create a To-Do
      </Button>
   );

   // Create New To-Do template
   const createNewTodoTemplateComponent = (
      <NewTodo
         handleVisibility={setIsCreateMode}
         handleCreate={onCreateNewTodo}
      />
   );

   return (
      <Main>
         <Box display="flex" flexDirection="column" gap={4}>
            {tasks.map((task) => (
               <ToDo
                  title={task.title}
                  body={task.body}
                  date={task.date}
                  key={task._id}
                  _id={task._id}
                  onDelete={onTodoDelete}
               />
            ))}
            {isCreateMode
               ? createNewTodoTemplateComponent
               : createNewTodoComponent}
         </Box>
         <EditModal _id="1" newTitle="test" newBody="test" />
      </Main>
   );
};

export default Index;
