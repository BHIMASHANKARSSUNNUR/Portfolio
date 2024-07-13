import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public router:Router){}

  onHome(){
    window.scrollTo({top:0,behavior:'smooth'})
  }
  onAbout(){
    this.router.navigate(['./portfolio-website/about'])

  }
  onContact(){
    this.router.navigate(['./portfolio-website/contact'])

  }
}
