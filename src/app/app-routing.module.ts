import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { EditTodoComponent } from "./edit-todo/edit-todo.component";

const routes: Routes = [
  { path: "", component: EditTodoComponent },
  { path: "edit/:id", component: EditTodoComponent },
  { path: "crap", component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      //  {enableTracing: true} -- enable for log in browser console
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
