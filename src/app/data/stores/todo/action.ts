import { Action } from '@ngrx/store';
import { Todo } from '../../models';

export enum ActionTypes {
  GET_TODOS = '[Todo] Get todos',
  LOAD_TODOS = '[TODO] Load todos',
  GET_TODO = '[Todo] Get todo',
  LOAD_ADD_TODO = '[Todo] Load add todo',
  ADD_TODO = '[Todo] Add todo',
  LOAD_EDIT_TODO = '[Todo] Load edit todo',
  EDIT_TODO = '[Todo] Edit todo',
  REMOVE_TODO_SUCCESS = '[Todo] Remove todo success',
  REMOVE_TODO = '[Todo] Remove todo',
  UPDATE_TODO = '[Todo] Update todo'
}
export class LoadTodos implements Action {
  readonly type = ActionTypes.LOAD_TODOS;
}

export class LoadAddTodoAction implements Action {
  readonly type = ActionTypes.LOAD_ADD_TODO;
  constructor(public payload: Todo) {}
}

export class GetTodos implements Action {
  readonly type = ActionTypes.GET_TODOS;
  constructor(public payload: Todo[]) {}
}

export class AddTodoAction implements Action {
  readonly type = ActionTypes.ADD_TODO;
  constructor(public payload: Todo[]) {}
}

export class RemoveTodoAction implements Action {
  readonly type = ActionTypes.REMOVE_TODO;
  constructor(public payload: string) {}
}

export class RemoveTodoSuccessAction implements Action {
  readonly type = ActionTypes.REMOVE_TODO_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class LoadEditTodo implements Action {
  readonly type = ActionTypes.LOAD_EDIT_TODO;
  constructor(public payload: Todo) {}
}

export class EditTodo implements Action {
  readonly type = ActionTypes.EDIT_TODO;
  constructor(public payload: Todo[]) {}
}

export type Actions =
  | GetTodos
  | LoadTodos
  | AddTodoAction
  | RemoveTodoAction
  | RemoveTodoSuccessAction
  | EditTodo
  | LoadEditTodo;
