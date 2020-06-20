import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { InfoFooterComponent } from './info-footer/info-footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './main/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    InfoFooterComponent,
    HeaderComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
