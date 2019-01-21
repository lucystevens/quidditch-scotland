import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain/data-definitions';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  getImageUrl(article: Article): string {
    return this.articleService.getImageUrl(article);
  }

}
