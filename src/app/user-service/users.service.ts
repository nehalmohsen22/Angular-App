import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiUser } from './../user-interface/i-api-user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userobj: IApiUser[] =[];
  curr_user?: IApiUser;

  constructor(private httpclint: HttpClient) {
    this.httpclint.get<IApiUser[]>('https://fakestoreapi.com/users').subscribe(data => {
      this.userobj = data;
    });
  }

  getAllUsers() {
    return this.userobj;
  }

  getUserById(id?: number) {

    console.log(this.curr_user);
    this.httpclint.get<IApiUser>('https://fakestoreapi.com/users/'+id).subscribe(data => {
      this.curr_user = data;
      return this.curr_user;
    });
    console.log(this.curr_user);

    return this.curr_user;
  }

  getUserByUserPass(u: string, p: string) {
    return this.userobj.find(user => user.username === u && user.password === p);
  }
}
