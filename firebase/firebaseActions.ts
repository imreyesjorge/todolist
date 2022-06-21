import { addDoc, collection, getDocs } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import db from './firebaseClient';

export const getTodos = async () => {
   const todosCollection = collection(db, 'todos');
   const todosSnapshot = await getDocs(todosCollection);
   const todosList = todosSnapshot.docs.map((note) => note.data());

   return todosList;
};

export const addTodo = async (title, body, date) => {
   const todosCollection = collection(db, 'todos');
   const docRef = await addDoc(todosCollection, {
      _id: nanoid(),
      title,
      body,
      date,
   });
};
