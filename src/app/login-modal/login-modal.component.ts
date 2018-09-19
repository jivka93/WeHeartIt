import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  @Output() login = new EventEmitter<{email:string, password:string}>();
  @Input() show: boolean;

  email:string;
  password:string;

  constructor() {

  }

  onLogin() {
    this.login.emit({email: this.email, password: this.password});
    this.closeModal();
  }

  closeModal() {
    this.show = false;
    console.log('modal emitting false');
  }

}
