import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email, ServerResponse } from '../domain/data-definitions';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mailerUrl = "http://localhost:8001";
  //mailerUrl = "https://mailer.lukecmstevens.co.uk";
  host = "lukecmstevens";

  constructor(private http: HttpClient) { }

  getSiteKey() : Observable<ServerResponse<string>>{
    return this.http.get<ServerResponse<string>>(this.mailerUrl + "/sitekey/" + this.host);
  }

  getHostName() : string {
    return this.host;
  }

  sendContactForm(email : Email) : Observable<ServerResponse<string>> {
    email.host = this.host;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<ServerResponse<string>>(this.mailerUrl + "/mail", JSON.stringify(email));  
  }
}
