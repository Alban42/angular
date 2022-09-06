import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url: string = environment.commentsUrl;

  constructor(
    private http: HttpClient,
  ) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url);
  }

  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.url + `/${id}`);
  }
}
