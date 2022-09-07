import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from './user';
import { UsersService } from './users.service';

@Pipe({
  name: 'getUser',
})
export class GetUserPipe implements PipeTransform {
  constructor(private usersService: UsersService) {}

  transform(id: number, field: string): Observable<string> {
    let user = this.usersService.getUser(id);
    let result: Observable<string> = of('');
    switch (field) {
      case 'email':
        result = user.pipe(map((user) => user.email));
        break;
      case 'name':
        result = user.pipe(map((user) => user.name));
        break;
      case 'username':
        result = user.pipe(map((user) => user.username));
        break;
    }

    return result;
  }
}
