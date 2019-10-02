import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoConfig } from '../domain/data-definitions';
import { CONFIG } from '../domain/config';

@Injectable()
export class SeoService {

    constructor(private meta: Meta) { }

    generateTags(config: SeoConfig) {
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@content' });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:site_name', content: CONFIG.siteName });
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ property: 'og:url', content: `https://www.quidditchscotland.co.uk/${config.slug}` });
    }

}