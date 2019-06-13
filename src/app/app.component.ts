import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromSelector from "./data/stores";
import { getTodos, ItemsState } from "./data/stores/todo/selectors";
import { Observable } from "rxjs";
import { Todo } from "./data/models";
import { TodoService } from "./data/stores/todo/todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  todo$: Observable<Todo[]>;

  constructor(private store: Store<ItemsState>, private service: TodoService) {}

  ngOnInit() {
    this.store.subscribe(data => console.log(data));
    this.todo$ = this.store.select(getTodos);

    this.service.getTodosService();
  }
}
