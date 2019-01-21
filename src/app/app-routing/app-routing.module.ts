import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { NewsComponent } from '../components/news/news.component';
import { ArticleComponent } from '../components/article/article.component';
import { AboutComponent } from '../components/about/about.component';
import { FixturesComponent } from '../components/fixtures/fixtures.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'news', component: NewsComponent},
  { path: 'article/:id', component: ArticleComponent},
  { path: 'fixtures', component: FixturesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }