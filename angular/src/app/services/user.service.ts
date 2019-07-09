import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../models/user';
import "rxjs/add/operator/mergeMap";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUserAsync(): Observable<Array<User>> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  public getUsers(): User[] {
    return [ new User('Leanne Graham'), new User('Patricia Lebsack'), new User('Other')];
  }
}
