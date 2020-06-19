import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('input') input;

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }
}