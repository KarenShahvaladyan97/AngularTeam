import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContainComponent } from './components/contain/contain.component';
import { FooterComponent } from './components/footer-item/footer-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectUserComponent } from './components/project-user/project-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ContainComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
