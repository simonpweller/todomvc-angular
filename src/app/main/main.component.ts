import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(public todoService: TodoService) {}
}
