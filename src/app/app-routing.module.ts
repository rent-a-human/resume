import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCardComponent } from './components/main-card/main-card.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'users/:username',
    component: MainCardComponent
  },
  { path: '**', redirectTo: 'login' },
  { path: 'login**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
