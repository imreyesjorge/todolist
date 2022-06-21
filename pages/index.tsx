import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import NewTodo from '../components/NewTodo/NewTodo';
import ToDo from '../components/ToDo/ToDo';
import Main from '../layouts/Main/Main';
import EditModal from '../components/EditModal/EditModal';
import { ACTIONS } from '../models/TodoModel';
import React from 'react';
import {
   getTodos,
   addTodo,
   deleteTodo,
   updateTodo,
} from '../firebase/firebaseActions';

const Index = ({ dbTodos }) => {
   const [tasks, setTasks] = useState([]);
   const [isCreateMode, setIsCreateMode] = useState(false);
   const [editModalData, setEditModalData] = useState({
      _id: '',
      newTitle: '',
      newBody: '',
   });
   const [isEditVisible, setIsEditVisible] = useState(false);

   useEffect(() => {
      setTasks(dbTodos);
   }, []);

   /*-------------------/
   /- Event Listeners  -/
   /-------------------*/
   const onCreateNewTodoClick = () => {
      setIsCreateMode(true);
   };

   const onTodoEditClick = (_id: string, newTitle: string, newBody: string) => {
      setIsEditVisible(true);
      setEditModalData({
         _id,
         newTitle,
         newBody,
      });
   };

   const onEditModalClose = () => {
      setEditModalData({
         _id: '',
         newTitle: '',
         newBody: '',
      });
      setIsEditVisible(false);
   };

   /*-------------------/
   /- To-Do's Actions  -/
   /-------------------*/
   const onCreateNewTodo = async (
      title: string,
      body: string,
      date: string,
   ) => {
      await addTodo(title, body, date);
      const updatedTodos = await getTodos();
      setTasks(updatedTodos);
   };

   const onEditModalUpdate = async (
      _id: string,
      newTitle: string,
      newBody: string,
   ) => {
      const updatedTasks = [...tasks];
      const taskToUpdate = updatedTasks.findIndex((task) => {
         return task._id == _id;
      });

      updatedTasks[taskToUpdate].title = newTitle;
      updatedTasks[taskToUpdate].body = newBody;

      await updateTodo(_id, newTitle, newBody);

      const updatedTodos = await getTodos();
      setTasks(updatedTodos);

      onEditModalClose();
   };

   const onPositionChange = (action: ACTIONS, index: number) => {
      if (
         (index == 0 && action == ACTIONS.UP) ||
         (index == tasks.length - 1 && action == ACTIONS.DOWN)
      ) {
         console.log('Cannot do this operation');
      } else {
         {
            const updatedTasks = [...tasks];
            let aux = updatedTasks[index];

            updatedTasks[index] =
               updatedTasks[action == ACTIONS.UP ? index - 1 : index + 1];
            updatedTasks[action == ACTIONS.UP ? index - 1 : index + 1] = aux;

            setTasks(updatedTasks);
         }
      }
   };

   const onTodoDelete = async (_id: string) => {
      await deleteTodo(_id);
      const updatedTodos = await getTodos();
      setTasks(updatedTodos);
   };

   /*--------------------/
   /- Component Blocks  -/
   /--------------------*/
   const createNewTodoComponent = (
      <Button
         size="lg"
         rightIcon={<PlusSquareIcon />}
         onClick={onCreateNewTodoClick}>
         Create a To-Do
      </Button>
   );

   const createNewTodoTemplateComponent = (
      <NewTodo
         handleVisibility={setIsCreateMode}
         handleCreate={onCreateNewTodo}
      />
   );

   return (
      <Main>
         <Box display="flex" flexDirection="column" gap={4}>
            {tasks.map((task, index) => (
               <ToDo
                  title={task.title}
                  body={task.body}
                  date={task.date}
                  key={task._id}
                  _id={task._id}
                  index={index}
                  onDelete={onTodoDelete}
                  onEdit={onTodoEditClick}
                  onPositionChange={onPositionChange}
               />
            ))}
            {isCreateMode
               ? createNewTodoTemplateComponent
               : createNewTodoComponent}
         </Box>
         {isEditVisible && (
            <EditModal
               editModalData={editModalData}
               setEditModalData={setEditModalData}
               closeModal={onEditModalClose}
               updateTodo={onEditModalUpdate}
            />
         )}
      </Main>
   );
};

export async function getServerSideProps(context) {
   const dbTodos = await getTodos();

   return {
      props: {
         dbTodos,
      },
   };
}

export default Index;
