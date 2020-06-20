import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
})
export class TodoCountComponent {
  @Input() todos: Todo[];

  get todoCount(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }
}
