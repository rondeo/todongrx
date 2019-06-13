import { Todo } from "../../models";

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  loaded: boolean;
}
