import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() @Output() user : User;
  @Output() showLoginModal = new EventEmitter<boolean>();;

  constructor() { 

  }

  ngOnInit() {
    this.showLoginModal.emit(false);
  };

  isLoggedIn = this.user ? true : false;
  messages = [];
  notifications = [
    {
      imageUrl: "https://data.whicdn.com/images/318828345/superthumb.jpg?t=1536045840",
      text: "We found a collection you might really like...",
      button: "Follow"
    },
    {
      imageUrl: "https://data.whicdn.com/images/314881508/superthumb.jpg?t=1530361717",
      text: "We found a collection you might really like...",
      button: "Follow"
    },
    {
      imageUrl: "https://data.whicdn.com/images/255025360/superthumb.jpg?t=1471507281",
      text: "We found a collection you might really like...",
      button: "Follow"
    }
  ];

  onlogIn = function() {
    this.showLoginModal.emit(true);
    console.log('navbar emitting "true"');
  };

  logOut = function() {
    if(this.user){
      this.user = null;
    }
  };

  addNewPost() {
    alert('New post added!');
  };
}
