import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() todos: Todo[];
}
