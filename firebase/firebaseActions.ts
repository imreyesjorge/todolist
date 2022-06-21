import {
   addDoc,
   collection,
   deleteDoc,
   doc,
   getDocs,
   getDoc,
   updateDoc,
} from 'firebase/firestore';
import db from './firebaseClient';

export const getTodos = async () => {
   const todosCollection = collection(db, 'todos');
   const todosSnapshot = await getDocs(todosCollection);

   const todosList = todosSnapshot.docs.map((todo) => {
      return { ...todo.data(), _id: todo.id };
   });

   return todosList;
};

export const addTodo = async (title: string, body: string, date: string) => {
   const todosCollection = collection(db, 'todos');
   await addDoc(todosCollection, {
      title,
      body,
      date,
   });
};

export const updateTodo = async (_id: string, title: string, body: string) => {
   const docRef = await doc(collection(db, 'todos'), _id);
   await updateDoc(docRef, { title, body });
};

export const deleteTodo = async (_id) => {
   const docRef = await doc(collection(db, 'todos'), _id);
   await deleteDoc(docRef);
};
