import { SkillsComponent } from './skills/skills.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ModalComponent } from './modal/modal.component';
import { WorkPageComponent } from './work-page/work-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'work', component: WorkPageComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    WorkComponent,
    ModalComponent,
    WorkPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
