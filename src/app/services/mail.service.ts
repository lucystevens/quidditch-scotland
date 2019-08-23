import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email, ServerResponse } from '../domain/data-definitions';
import { name } from '../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mailerUrl = "https://mailer.lukecmstevens.co.uk";
  application = "quidditchscotland";

  constructor(private http: HttpClient) { }

  getSiteKey() : Observable<ServerResponse<string>>{
    return this.http.get<ServerResponse<string>>(this.mailerUrl + "/sitekey/" + this.application);
  }

  getApplication() : string {
    return this.application;
  }

  sendContactForm(email : Email) : Observable<ServerResponse<string>> {
    email.application = this.application;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<ServerResponse<string>>(this.mailerUrl + "/mail", JSON.stringify(email));  
  }
}
