import { Injectable } from '@angular/core';
import { Article } from '../domain/data-definitions';
import { ARTICLES } from '../domain/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  /**
   * Gets all articles where is published date is before todays
   * date. Allows for articles to be scheduled to be published
   */
  getArticles(): Article[] {
    return ARTICLES;.filter(article => article.date <= new Date());
  }
}
