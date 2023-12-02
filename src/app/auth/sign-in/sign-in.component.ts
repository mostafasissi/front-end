import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { userList } from '../auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    userForm = this.fb.group({
      username : ['' , Validators.required],
      password : ['' , Validators.required],
    })
    constructor(private fb : FormBuilder){}

    onSubmit(){

      console.log(this.userForm.value)

      // let user = userList.filter(u => u.username == this.userForm.value.username && u.password ==  this.userForm.value.password);
      // if(user.length != 0 ){
      //     console.log(user)
      // }else {
      //   console.log('password not correct')
      // }
    }
}
