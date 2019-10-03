import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain/data-definitions';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private seoService: SeoService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticle(id);

    let seo = {
      title: this.article.title,
      description: this.articleService.getSeoDescription(this.article),
      image:  this.getImageUrl(),
      slug:  `articles/${id}`,
      type: 'article',
      additionalKeywords: this.article.tags
    }
    this.seoService.generateTags(seo);

  }

  getImageUrl(){
    return this.articleService.getImageUrl(this.article);
  }

}
