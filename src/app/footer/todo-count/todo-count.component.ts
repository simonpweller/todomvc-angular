import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
})
export class TodoCountComponent {
  constructor(public todoService: TodoService) {}
}
