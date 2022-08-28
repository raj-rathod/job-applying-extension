import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { JobDashboardComponent } from './Components/job-dashboard/job-dashboard.component';
import { ApplicationsLinkComponent } from './Components/applications-link/applications-link.component';
import { ResumeLinkComponent } from './Components/resume-link/resume-link.component';
import { CareerPagesLinkComponent } from './Components/career-pages-link/career-pages-link.component';
import { StudyMaterialComponent } from './Components/study-material/study-material.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    JobDashboardComponent,
    ApplicationsLinkComponent,
    ResumeLinkComponent,
    CareerPagesLinkComponent,
    StudyMaterialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
