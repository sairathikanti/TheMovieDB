import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    address : new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipcode: new FormControl(''),
    })

  });
onSubmit(){
  console.warn(this.profileForm.value);
}
  constructor() { }

  ngOnInit() {
  }
 
}
