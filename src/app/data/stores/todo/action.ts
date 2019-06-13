import { Action } from "@ngrx/store";
import { Todo } from "../../models";

export enum ActionTypes {
  GET_TODOS = "[Todo] Get todos",
  GET_TODO = "[Todo] Get todo",
  ADD_TODO = "[Todo] Add todo",
  REMOVE_TODO = "[Todo] Remove todo",
  UPDATE_TODO = "[Todo] Update todo"
}

export class GetTodos implements Action {
  readonly type = ActionTypes.GET_TODOS;
  constructor(public payload: Todo[]) {}
}

export type Actions =
  GetTodos;
