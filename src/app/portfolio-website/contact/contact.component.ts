import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  userForm:any;
  constructor(public fb:FormBuilder) {
  }
  ngOnInit(){
    this.userForm=this.fb.group({
      name:[null],
      email:[null],
      message:[null]
    })
  }

  onSubmit(){
    console.log("Form submitted",this.userForm.value)
  }
}
