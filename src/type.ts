export interface Task {
  id: number;
  text: string;
  complete: boolean;
}

export type AddTask = (text: string) => void;
export type ToggleCompletedTask = (id: number) => void;
export type DeleteTask = (id: number) => void;
export type UpdateTask = (id: number, newText: string) => void;
