import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../domain/data-definitions';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mailerUrl = "http://localhost:8001";
  //mailerUrl = "https://mailer.lukecmstevens.co.uk";
  host = "lukecmstevens";

  constructor(private http: HttpClient) { }

  getSiteKey() {
    return this.http.get(this.mailerUrl + "/sitekey/" + this.host, {responseType: 'text'});
  }

  getHostName() : string {
    return this.host;
  }

  sendContactForm(email : Email) {
    email.host = this.host;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.post(this.mailerUrl + "/mail", JSON.stringify(email)).subscribe(response => console.log(response));
        
  }
}
