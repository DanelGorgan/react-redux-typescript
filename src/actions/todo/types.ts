import { FetchTodosAction, DeleteToDoAction} from "./todoAction";

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

export type ToDoAction = FetchTodosAction | DeleteToDoAction;
