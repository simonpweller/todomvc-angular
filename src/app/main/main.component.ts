import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  @Input() todos: Todo[];

  get allCompleted() {
    return this.todos.every((todo) => todo.completed);
  }

  toggleAll(): void {
    this.todos = this.todos.map((todo) => ({
      ...todo,
      completed: !this.allCompleted,
    }));
  }
}
