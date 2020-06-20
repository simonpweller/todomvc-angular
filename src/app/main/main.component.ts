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

  toggleAll(completed: boolean): void {
    this.todos.forEach((todo) => (todo.completed = completed));
  }
}
