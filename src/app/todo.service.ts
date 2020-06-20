import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

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
    this.todos = [...this.todos, todo];
  }

  toggle(id: string) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  toggleAll(completed: boolean): void {
    this.todos = this.todos.map((todo) => ({ ...todo, completed }));
  }
}
