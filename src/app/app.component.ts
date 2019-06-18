
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoState } from "./data/stores/todo/state";
import { FormGroup, FormControl } from "@angular/forms";

import * as fromSelector from "./data/stores";
import { getTodos } from "./data/stores/todo/selectors";
import { Observable } from "rxjs";
import { Todo } from "./data/models";
import { TodoService } from "./data/stores/todo/todo.service";
import { LoadTodos, LoadAddTodoAction, RemoveTodoAction, LoadEditTodo } from "./data/stores";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    quantity: new FormControl('')
  });

  id: number;
  todos$: Observable<Todo[]>;
  editing = false;

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
    console.log(id);
    this.store.dispatch(new RemoveTodoAction(id));
    this.service.removeTodoService(id).subscribe(data => console.log(data));
  }

  editTodo(todo: Todo) {
    this.todoForm.patchValue({
      id: todo.id,
      name: todo.name,
      quantity: todo.quantity
    });

    this.id = this.todoForm.value.id;

    this.todoForm.get('id').disable();
    this.editing = true;
  }

  confirmEdit() {
    this.store.dispatch(
      new LoadEditTodo({ ...this.todoForm.value, id: Number(this.id) })
    );
    this.editing = false;
    this.todoForm.enable();
  }

  cancleEdit() {
    this.editing = false;
    this.todoForm.enable();
  }
}
