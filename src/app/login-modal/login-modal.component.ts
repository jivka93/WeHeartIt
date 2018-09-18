import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  @Output() login = new EventEmitter<{email:string, password:string}>();
  @Input() show: boolean = true;

  showModal() {
    return this.show === true ? 'display:block': 'display:hidden'
  };

  email="staticEmail";
  password:string;

  constructor() {
    this.show = true;
  }

  onLogin() {
    this.login.emit({email: this.email, password: this.password});
  }

  closeModal() {
    this.showModal = function() {
      return 'display:hidden'
    }
  }

}
