import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(private todoService: TodoService) {}

  get todos(): Todo[] {
    return this.todoService.todos;
  }

  get hasTodos(): boolean {
    return this.todoService.hasTodos;
  }

  get allCompleted(): boolean {
    return this.todoService.allCompleted;
  }

  toggleAll(completed: boolean): void {
    this.todoService.toggleAll(completed);
  }
}
