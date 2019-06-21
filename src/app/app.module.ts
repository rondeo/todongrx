import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataModule } from "./data/data.module";
import { EffectsModule } from "@ngrx/effects";
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { RootComponentComponent } from './root-component/root-component.component';

@NgModule({
  declarations: [AppComponent, EditTodoComponent, RootComponentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot()

  ],
  providers: [],
  bootstrap: [RootComponentComponent]
})
export class AppModule {}
