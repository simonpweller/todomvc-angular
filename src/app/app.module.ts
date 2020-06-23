import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './todo-app/footer/footer.component';
import { MainComponent } from './todo-app/main/main.component';
import { InfoFooterComponent } from './info-footer/info-footer.component';
import { HeaderComponent } from './todo-app/header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo-app/main/todo/todo.component';
import { TodoCountComponent } from './todo-app/footer/todo-count/todo-count.component';
import { ClearCompletedComponent } from './todo-app/footer/clear-completed/clear-completed.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltersComponent } from './todo-app/footer/filters/filters.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    InfoFooterComponent,
    HeaderComponent,
    TodoComponent,
    TodoCountComponent,
    ClearCompletedComponent,
    FiltersComponent,
    TodoAppComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
