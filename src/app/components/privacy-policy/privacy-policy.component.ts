import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  contactEmail = "[EMAIL ADDRESS]";

  constructor() {}

  ngOnInit() {
  }

  smoothScroll(elementID: string){
    console.log("Scrolling to " + elementID);
    const element = document.querySelector(elementID);
    element.scrollTop += 20;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

}
