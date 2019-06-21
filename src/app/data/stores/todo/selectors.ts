import {
  createFeatureSelector,
  ActionReducerMap,
  createSelector
} from "@ngrx/store";

// import * as fromTodoReducer from "./reducer";
import * as state from "./state";

// export interface ItemsState {
//   todos: state.TodoState;
// }

// export const reducers: ActionReducerMap<ItemsState> = {
//   todos: fromTodoReducer.todoReducer
// };

export const TodoSelectorState = createFeatureSelector<state.TodoState>(
  "todos"
);

export const getTodos = createSelector(
  TodoSelectorState,
  todoState => todoState.todos
);

export const getItemForEdit = id =>
  createSelector(
    TodoSelectorState,
    todoState => todoState.todos.filter(todo => todo.id === id)[0]
  );
