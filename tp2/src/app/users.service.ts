import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = environment.usersUrl;

  constructor(
    private http: HttpClient,
  ) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + `/${id}`);
  }
}
