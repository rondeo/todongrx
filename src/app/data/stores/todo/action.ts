import { Action } from "@ngrx/store";
import { Todo } from "../../models";

export enum ActionTypes {
  GET_TODOS = "[Todo] Get todos",
  LOAD_TODOS = "[TODO] Load todos",
  GET_TODO = "[Todo] Get todo",
  LOAD_ADD_TODO = "[Todo] Load add todo",
  ADD_TODO = "[Todo] Add todo",
  LOAD_REMOVE_TODO = "[Todo] Load remove todo",
  REMOVE_TODO = "[Todo] Remove todo",
  UPDATE_TODO = "[Todo] Update todo"
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

export class LoadRemoveTodoAction implements Action {
  readonly type = ActionTypes.LOAD_REMOVE_TODO;
  constructor(payload: number) {}
}

export class RemoveTodoAction implements Action {
  readonly type = ActionTypes.REMOVE_TODO;
}

export type Actions =
  | GetTodos
  | LoadTodos
  | AddTodoAction
  | LoadRemoveTodoAction;
