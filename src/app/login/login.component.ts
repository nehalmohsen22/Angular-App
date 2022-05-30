import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../Login';
import { UsersService } from './../user-service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Login = { username: '', password: '' };
  d = '';
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}

  login(userdata: Login) {
    const u = this.usersService.getUserByUserPass(
      userdata?.username,
      userdata?.password
    );
    u
      ? this.router.navigateByUrl('/user-details/' + u.id)
      : console.log('no data');
  }

  ngOnInit(): void {}
}
