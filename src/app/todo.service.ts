import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  get hasTodos(): boolean {
    return this.todos.length > 0;
  }

  get allCompleted() {
    return this.todos.every((todo) => todo.completed);
  }

  get activeTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggle(id: string) {
    this.todos.forEach((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
    });
  }

  toggleAll(completed: boolean): void {
    this.todos.forEach((todo) => (todo.completed = completed));
  }
}
