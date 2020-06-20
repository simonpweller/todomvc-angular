import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('input') input;
  @Output() newTodo = new EventEmitter<Todo>();
  newTodoText: string = '';

  constructor(private todoService: TodoService) {}

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  submit() {
    const trimmedTodoText = this.newTodoText.trim();
    if (trimmedTodoText.length) {
      this.todoService.addTodo({
        id: '1',
        text: trimmedTodoText,
        completed: false,
      });
      this.newTodoText = '';
    }
  }
}
