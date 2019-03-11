import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';
import { Email } from 'src/app/domain/data-definitions';

declare const grecaptcha : any;

declare global {
  interface Window {
    grecaptcha : any;
  }
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private mail : MailService) { }

  email: Email = new Email();
  sitekey: string;
  submitted = false;

  errors: string[];

  ngOnInit() {
    this.mail.getSiteKey().subscribe(sitekey => {
      this.sitekey = sitekey;
      console.log(sitekey)
      this.addScript()
    });

  }

  addScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = 'https://www.google.com/recaptcha/api.js?render=' + this.sitekey;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  submit() {
    let mail = this.mail;
    let sitekey = this.sitekey;
    let email = this.email;

    grecaptcha.ready(function() {
      console.log(sitekey);
      grecaptcha.execute(sitekey, {action: mail.getHostName()}).then(function(token) {
        console.log(token);
        email.token = token;

        // TODO: parse response from API
        mail.sendContactForm(email);
        this.submitted = true;
      });
    });
  }

}
