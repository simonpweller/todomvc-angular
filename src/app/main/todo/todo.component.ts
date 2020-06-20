import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  toggle(id: string) {
    this.todoService.toggle(id);
  }
}
