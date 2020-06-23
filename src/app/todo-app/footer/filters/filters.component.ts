import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  constructor(private route: ActivatedRoute) {}

  get filter() {
    return this.route.snapshot.paramMap.get('filter');
  }
}
