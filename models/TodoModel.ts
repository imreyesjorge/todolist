export interface TodoProps {
   _id: string;
   title: string;
   body: string;
   date: string;
   onDelete: (...args: any[]) => void;
   onEdit: (...args: any[]) => void;
}

export interface NewTodoProps {
   handleVisibility: (...args: any[]) => void;
   handleCreate: (...args: any[]) => void;
}
