import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [];

  setAndStore(todos) {
    this.todos = todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  get hasTodos(): boolean {
    return this.todos.length > 0;
  }

  get hasCompleted(): boolean {
    return this.todos.some((todo) => todo.completed);
  }

  get allCompleted(): boolean {
    return this.todos.every((todo) => todo.completed);
  }

  get activeTodoCount(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  addTodo(todo: Todo): void {
    this.setAndStore([...this.todos, todo]);
  }

  toggle(id: string): void {
    this.setAndStore(
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  toggleAll(completed: boolean): void {
    this.setAndStore(this.todos.map((todo) => ({ ...todo, completed })));
  }

  updateTodoText(id, newText) {
    this.setAndStore(
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  deleteTodo(id: string): void {
    this.setAndStore(this.todos.filter((todo) => todo.id !== id));
  }

  deleteCompleted(): void {
    this.setAndStore(this.todos.filter((todo) => !todo.completed));
  }
}
