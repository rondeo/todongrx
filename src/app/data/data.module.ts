import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromReducer from "./stores/todo/reducer";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffect } from "./stores/todo/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("todos", fromReducer.todoReducer),
    EffectsModule.forFeature([TodoEffect])
  ],
  providers: []
})
export class DataModule {}
