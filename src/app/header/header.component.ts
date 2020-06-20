import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('input') input;
  @Output() newTodo = new EventEmitter<Todo>();
  newTodoText: string = '';

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  submit() {
    const trimmedTodoText = this.newTodoText.trim();
    if (trimmedTodoText.length) {
      this.newTodo.emit({ id: '1', text: trimmedTodoText, completed: false });
      this.newTodoText = '';
    }
  }
}
