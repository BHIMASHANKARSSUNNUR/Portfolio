import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public router:Router){}
  onHome(){
    this.router.navigate(['./portfolio-website/home'])
  }
  onSkills(){
    const skillssection=document.getElementById('skills-section');
    if(skillssection){
      skillssection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }
  onAbout(){
        this.router.navigate(['./portfolio-website/about'])

  }
  onContact(){
        this.router.navigate(['./portfolio-website/contact'])

  }
}
