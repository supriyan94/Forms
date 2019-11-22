import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { MenuformComponent } from './menuform/menuform.component';

const routes: Routes = [
  { path: 'forms', component: FormsComponent},
  { path: '', redirectTo: '/test', pathMatch: 'full'},
  { path: 'menuform', component: MenuformComponent},
  { path: '**', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
