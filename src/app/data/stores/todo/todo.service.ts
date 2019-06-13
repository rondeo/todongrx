import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodosService() {
    const url = "http://localhost:5000";
    const getTodosUrl = "/items/get-items";

    this.http.get(`${url}${getTodosUrl}`)
      .subscribe(data => console.log('from server ' + JSON.stringify(data, null, 4)));
  }
}
