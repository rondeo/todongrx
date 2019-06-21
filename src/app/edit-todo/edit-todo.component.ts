import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { TodoState } from "../data/stores/todo/state";
import { getItemForEdit } from "../data/stores";

@Component({
  selector: "app-edit-todo",
  templateUrl: "./edit-todo.component.html",
  styleUrls: ["./edit-todo.component.scss"]
})
export class EditTodoComponent implements OnInit {
  test: any;
  todoForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    quantity: new FormControl("")
  });

  constructor(private route: ActivatedRoute, private store: Store<TodoState>) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store
        .select(getItemForEdit(Number(params.id)))
        .subscribe(({ id, name, quantity }) => {
          this.todoForm.patchValue({
            id,
            name,
            quantity
          });
        });
    });
  }

  onSubmit() {}
}
