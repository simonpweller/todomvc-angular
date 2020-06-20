import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  @Input() todos: Todo[];
}
