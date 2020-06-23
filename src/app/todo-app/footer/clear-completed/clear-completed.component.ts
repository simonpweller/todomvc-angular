import { Component } from '@angular/core';
import { TodoService } from '../../../todo.service';

@Component({
  selector: 'app-clear-completed',
  templateUrl: './clear-completed.component.html',
})
export class ClearCompletedComponent {
  constructor(private todoService: TodoService) {}

  get hasCompleted(): boolean {
    return this.todoService.hasCompleted;
  }

  deleteCompleted(): void {
    this.todoService.deleteCompleted();
  }
}
