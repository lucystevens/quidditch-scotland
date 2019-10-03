import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoConfig } from '../domain/data-definitions';
import { CONFIG } from '../domain/config';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

    constructor(private meta: Meta) { }

    generateTags(config: SeoConfig) {
      let keywords = this.meta.getTag("name='keywords'").getAttribute("content");
      if(config.additionalKeywords.length > 0){
        keywords += ", " + config.additionalKeywords.join(", ");
      }
      this.meta.updateTag({ name: 'keywords', content: keywords });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@content' });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });

      this.meta.updateTag({ property: 'og:type', content: config.type });
      this.meta.updateTag({ property: 'og:site_name', content: CONFIG.siteName });
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ property: 'og:url', content: `https://www.quidditchscotland.co.uk/${config.slug}` });
    }

}