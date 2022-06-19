import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import NewTodo from '../components/NewTodo/NewTodo';
import ToDo from '../components/ToDo/ToDo';
import Main from '../layouts/Main/Main';
import EditModal from '../components/EditModal/EditModal';
import { ACTIONS } from '../models/TodoModel';

const Index = () => {
   const [tasks, setTasks] = useState([]);
   const [isCreateMode, setIsCreateMode] = useState(false);
   const [editModalData, setEditModalData] = useState({
      _id: '',
      newTitle: '',
      newBody: '',
   });
   const [isEditVisible, setIsEditVisible] = useState(false);

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

   const onTodoEdit = (_id: string, newTitle: string, newBody: string) => {
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

   const onEditModalUpdate = (
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

      setTasks(updatedTasks);
      onEditModalClose();
   };

   const onPositionChange = (action: ACTIONS, index) => {
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
                  onEdit={onTodoEdit}
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

export default Index;
