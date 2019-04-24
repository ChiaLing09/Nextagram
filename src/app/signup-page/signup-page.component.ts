import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { NextagramService } from '../nextagram.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private service: NextagramService) { }

  ngOnInit() {
  }

  onSubmit() {
    const data = this.signupForm.value
    this.service.submitSignUp(data)
  }

}
