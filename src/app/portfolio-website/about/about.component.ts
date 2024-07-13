import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  showEducation: boolean = true;
  showprojects: boolean = true;

  projects = [
    { name: 'Project 1', description: 'Description of Project 1' },
    { name: 'Project 2', description: 'Description of Project 2' },
    { name: 'Project 3', description: 'Description of Project 3' },
  ];
}
