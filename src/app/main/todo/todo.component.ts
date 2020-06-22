import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('input') input;
  constructor(private todoService: TodoService) {}

  editing: boolean = false;
  editedText: string;

  ngOnInit() {
    this.editedText = this.todo.text;
  }

  startEditing() {
    this.editing = true;
    console.log(this.editedText);
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }

  finishEditing() {
    this.editing = false;
    const trimmedText = this.editedText.trim();
    if (trimmedText.length > 0) {
      this.todoService.updateTodoText(this.todo.id, trimmedText);
      this.editedText = trimmedText;
    } else {
      this.todoService.deleteTodo(this.todo.id);
    }
  }

  cancelEditing() {
    this.editing = false;
    this.editedText = this.todo.text;
  }

  toggle(id: string): void {
    this.todoService.toggle(id);
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id);
  }
}
