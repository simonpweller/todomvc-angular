import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private todoService: TodoService) {}

  get hasTodos(): boolean {
    return this.todoService.hasTodos;
  }
}
