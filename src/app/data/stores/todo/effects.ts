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
  LoadAddTodoAction
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
}
