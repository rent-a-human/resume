import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from "./modules/material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    MaterialElevationDirective,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
