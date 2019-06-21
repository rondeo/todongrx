import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { map, switchMap } from "rxjs/operators";
import { TodoService } from "./todo.service";
import {
  LoadTodos,
  ActionTypes,
  GetTodos,
  AddTodoAction,
  LoadAddTodoAction,
  RemoveTodoAction,
  RemoveTodoSuccessAction,
  EditTodo
} from "./action";
import { Observable } from "rxjs";
import { Todo } from "../../models";

@Injectable()
export class TodoEffect {
  constructor(private action$: Actions, private todoService: TodoService) {}

  @Effect()
  loadTodos$: Observable<Action> = this.action$.pipe(
    ofType<LoadTodos>(ActionTypes.LOAD_TODOS),
    switchMap(() => {
      return this.todoService.getTodosService().pipe(
        map((todos: any) => {
          // console.log(todos);
          return new GetTodos(todos);
        })
      );
    })
  );

  @Effect()
  addTodo$: Observable<Action> = this.action$.pipe(
    ofType(ActionTypes.LOAD_ADD_TODO),
    switchMap((data: LoadAddTodoAction) => {
      return this.todoService.addTodosService(data.payload).pipe(
        map((todos: Todo[]) => {
          console.log("FROM SERVER" + JSON.stringify(todos, null, 4));
          return new AddTodoAction(todos);
        })
      );
    })
  );

  @Effect()
  editTodo$: Observable<Action> = this.action$.pipe(
    ofType(ActionTypes.LOAD_EDIT_TODO),
    switchMap((data: Todo) => {
      return this.todoService.editTodoService(data).pipe(
        map((todos: Todo[]) => {
          console.log(todos);
          return new EditTodo(todos);
        })
      );
    })
  );

  @Effect()
  removeTodo$: Observable<Action> = this.action$.pipe(
    ofType(ActionTypes.REMOVE_TODO),
    switchMap((data: RemoveTodoAction) => {
      console.log("DATA REMOVE " + JSON.stringify(data));
      return this.todoService.removeTodoService(data.payload).pipe(
        map((todos: Todo[]) => {
          console.log("FROM SERVER REMOVE" + JSON.stringify(todos, null, 4));
          return new RemoveTodoSuccessAction(todos);
        })
      );
    })
  );
}
