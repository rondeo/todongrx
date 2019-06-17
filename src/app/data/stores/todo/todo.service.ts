import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../../models";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:5000";

  getTodosService() {
    const getTodosUrl = "/items/get-items";

    return this.http.get(`${this.url}${getTodosUrl}`);
  }

  addTodosService(todo: Todo) {
    const addItemUrl = "/items/add-item";

    return this.http.post(`${this.url}${addItemUrl}`, todo);
  }

  removeTodoService(id: string) {
    const removeItemUrl = "/items/remove-item";

    return this.http.delete(`${this.url}${removeItemUrl}/${id}`);
  }
}
