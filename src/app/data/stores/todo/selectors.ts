import {
  createFeatureSelector,
  ActionReducerMap,
  createSelector
} from "@ngrx/store";

import * as fromTodoReducer from "./reducer";
import * as state from "./state";

export interface ItemsState {
  todos: state.TodoState;
}

export const reducers: ActionReducerMap<ItemsState> = {
  todos: fromTodoReducer.todoReducer
};

export const TodoSelectorState = createFeatureSelector<ItemsState>("todos");

export const getTodos = createSelector(
  TodoSelectorState,
  todoState => todoState.todos.todos
);
