import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userList } from '../auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userForm = this.fb.group({
    username : ['' , Validators.required],
    password : ['' , Validators.required],
    confirmPassword :  ['' , Validators.required],
    firstName : ['' , Validators.required],
    lastName :  ['' , Validators.required],
  })
  constructor(private fb : FormBuilder){}

  onSubmit(){
    console.log(this.userForm.value);
  }

}
