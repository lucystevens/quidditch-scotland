import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { NewsComponent } from '../components/news/news.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
