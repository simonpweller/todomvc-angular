import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../Todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  get todos(): Todo[] {
    const filter = this.route.snapshot.paramMap.get('filter');
    if (!filter) {
      return this.todoService.todos;
    }
    return this.todoService.todos.filter((todo) =>
      filter === 'completed' ? todo.completed : !todo.completed
    );
  }

  get hasTodos(): boolean {
    return this.todoService.hasTodos;
  }

  get allCompleted(): boolean {
    return this.todoService.allCompleted;
  }

  toggleAll(completed: boolean): void {
    this.todoService.toggleAll(completed);
  }
}
