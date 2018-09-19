import { Component, Output, Input } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() currentUser : User;
  @Input() showLoginModal : boolean;

  constructor() {
  }

  onLogin(loginData: {email:string, password:string}) {
    // TODO loginService
    // this.currentUser = this.loginService.login(loginData.email, loginData.password);
    this.currentUser = new User('Jivka93', loginData.email, loginData.password);
  }

  onLoginModal(arg: boolean) {
    this.showLoginModal = arg;
  }

  onLogout() {
    if(this.currentUser != null)
    this.currentUser = null;
  }

  register(username:string, email:string, password:string, repeatPassword:string, image:string) {
    if (password === repeatPassword) {

      // TODO: registerService
      this.currentUser = new User(username, email, password, image);
    }
  }

}
