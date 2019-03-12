import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';
import { Email } from 'src/app/domain/data-definitions';
import { NgForm } from '@angular/forms';

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
    this.mail.getSiteKey().subscribe(response => {
      if(response.success){
        this.sitekey = response.data;
        console.log(this.sitekey)
        this.addScript()
      }
      else {
        console.log(response.errors);
      }

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

  submit(contactForm: NgForm) {
    let ctx = this;

    grecaptcha.ready(function() {
      console.log(ctx.sitekey);
      grecaptcha.execute(ctx.sitekey, {action: ctx.mail.getHostName()}).then(function(token) {
        console.log(token);
        ctx.email.token = token;

        // TODO: parse response from API
        ctx.mail.sendContactForm(ctx.email).subscribe(response => {
          if(response.success){
            ctx.submitted = true;
            console.log(response.data);
            contactForm.reset();
          }
          else {
            ctx.errors = response.errors;
          }
        })

      });
    });
  }

}
