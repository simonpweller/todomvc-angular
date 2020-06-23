import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';

const routes: Routes = [
  { path: '', component: TodoAppComponent },
  { path: ':filter', component: TodoAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
