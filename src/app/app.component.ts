import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser : User;

  constructor() { 
  }

  login(username:string, password:string) {

    // TODO loginService
    // this.currentUser = this.loginService.login(username, password);
  }

  register(username:string, email:string, password:string, repeatPassword:string, image:string) {
    if (password === repeatPassword) {

      // TODO: registerService
      this.currentUser = new User(username, email, password, image);
    }
  }

}
