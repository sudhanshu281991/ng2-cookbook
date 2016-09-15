import {Component, OnInit} from '@angular/core';
import { Router, RouterModule }   from '@angular/router';
import {User} from '../shared/models/user';
import {UserDataService} from './user-data.service';
import '../rxjs-operators';
import userData = require('./user-data.constants');



@Component({
  providers: [UserDataService],
  templateUrl: './app/user-data/user-data.component.html',
  styleUrls: ['./app/app.component.css']
})
export class UserDataComponent implements OnInit {
  //implementing the hardcoded value in HTML to be fetched from constants
  USER_DATA_HEADING: string = userData.USER_DATA_HEADING;
  CHOOSE_ACTIVE_USER:string=userData.CHOOSE_ACTIVE_USER;
  COPYRIGHT:string=userData.COPYRIGHT;
  //end of the constants
  
  erroMessage: string;
  message: string = "Hello!";
  users: Array<User>;
  activeUser: User;
  constructor(private router: Router, private userDataService: UserDataService) { }
  ngOnInit() { this.getUserData(); }
  getUserData() {
    this.userDataService.getUserData().subscribe(
      users => this.users = users,
      error => this.erroMessage = <any>error
    )
  }

  selectUser(user) {
    this.activeUser = user;
  }
  onUserCreated(event) {
    console.log(event);
    this.users.push(event.user);
    this.activeUser = event.user;
  }
  onSelect() {
    this.router.navigate(['/windstorn']);
    return false;
  }
}