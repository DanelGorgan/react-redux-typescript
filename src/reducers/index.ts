import {combineReducers} from "redux";
import {todosReducer} from "./todosReducer";
import { Todo } from "../actions/todoAction";

export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
});
