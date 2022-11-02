import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ExtraComponent } from './extra/extra.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectivesComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    DeclarationComponent,
    HobbiesComponent,
    ExtraComponent,


 
 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
