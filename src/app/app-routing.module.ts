import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCardComponent } from './components/main-card/main-card.component';

const routes: Routes = [
  {
    path: '',
    component: MainCardComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  { path: 'login**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
