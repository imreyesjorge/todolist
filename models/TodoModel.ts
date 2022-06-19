export interface TodoProps {
   title: string;
   body: string;
   date: string;
}

export interface NewTodoProps {
   handleVisibility: (...args: any[]) => void;
   handleCreate: (...args: any[]) => void;
}
