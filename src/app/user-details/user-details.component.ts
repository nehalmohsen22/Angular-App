import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IApiUser } from './../user-interface/i-api-user';
import { UsersService } from './../user-service/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user?: IApiUser;
  constructor(
    private httpClient: HttpClient,
    private activeRoute: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((pram) => {
      this.user = this.userService.getUserById(pram['id']);
      const promise = this.httpClient
        .get<IApiUser>('https://fakestoreapi.com/users/' + pram['id'])
        .toPromise();
      promise
        .then((data) => {
          this.user = data;
          console.log(this.user);
          console.log('Promise resolved with: ' + JSON.stringify(data));
        })
        .catch((error) => {
          console.log('Promise rejected with ' + JSON.stringify(error));
        });
      console.log(this.user);
    });
  }
}
