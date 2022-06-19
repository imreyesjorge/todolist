export interface TodoProps {
   _id: string;
   title: string;
   body: string;
   date: string;
   index: number;
   onDelete: (...args: any[]) => void;
   onEdit: (...args: any[]) => void;
   onPositionChange: (...args: any[]) => void;
}

export interface NewTodoProps {
   handleVisibility: (...args: any[]) => void;
   handleCreate: (...args: any[]) => void;
}

export enum ACTIONS {
   UP,
   DOWN,
}
