import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./stores/todo/selectors";

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature("todos", reducers)],
  providers: []
})
export class DataModule {}
