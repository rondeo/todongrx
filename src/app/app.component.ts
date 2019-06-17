import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoState } from "./data/stores/todo/state";
import { FormGroup, FormControl } from "@angular/forms";

import * as fromSelector from "./data/stores";
import { getTodos } from "./data/stores/todo/selectors";
import { Observable } from "rxjs";
import { Todo } from "./data/models";
import { TodoService } from "./data/stores/todo/todo.service";
import { LoadTodos, LoadAddTodoAction } from "./data/stores";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  todoForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    quantity: new FormControl("")
  });

  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodoState>, private service: TodoService) {}

  ngOnInit() {
    this.store.dispatch(new LoadTodos());
    this.todos$ = this.store.select(getTodos);

    this.service.getTodosService();
  }

  onSubmit() {
    this.store.dispatch(new LoadAddTodoAction(this.todoForm.value));
  }

  deleteItem(id: any) {
    this.service.removeTodoService(id).subscribe(data => console.log(data));
  }
}
