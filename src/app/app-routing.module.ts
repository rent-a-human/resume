import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCardComponent } from './components/main-card/main-card.component';

const routes: Routes = [
  {
    path: 'index.html',
    component: MainCardComponent
  },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  { path: 'login**', redirectTo: 'login' },
  { path: '', redirectTo: '/index.html', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
