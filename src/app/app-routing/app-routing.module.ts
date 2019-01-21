import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { NewsComponent } from '../components/news/news.component';
import { ArticleComponent } from '../components/article/article.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'news', component: NewsComponent},
  { path: 'article/:id', component: ArticleComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
