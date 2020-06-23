import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(private todoService: TodoService) {}

  get hasTodos() {
    return this.todoService.hasTodos;
  }
}
