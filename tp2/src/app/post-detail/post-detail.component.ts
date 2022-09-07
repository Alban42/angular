import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { FormControl } from '@angular/forms';
import { CommentForm } from './commentForm';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  comments: Comment[];
  emails: string[] = [];

  comment: CommentForm = new CommentForm();
  submitted = false;

  filteredOptions: Observable<string[]>;
  emailControl = new FormControl<string>('');

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();

    this.emailControl.valueChanges.subscribe((newValue) => {
      this.filteredOptions = of(this._filter(newValue as string));
    });

    // this.filteredOptions = this.emailControl.valueChanges.pipe(
    //   map((value) => {
    //     return this._filter(value as string);
    //   })
    // );
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPost(id).subscribe((post) => {
      this.post = post;
      this.getComments(id);
      return this.post;
    });
  }

  getComments(postId: number): void {
    this.commentsService
      .getComments()
      .pipe(
        map((comments) =>
          comments.filter((comment) => comment.postId == postId)
        )
      )
      .subscribe((comments) => {
        this.comments = comments;
        this.getEmails();
        return this.comments;
      });
  }

  getEmails(): void {
    this.comments.map((comment) => this.emails.push(comment.email));
    this.filteredOptions = of(this.emails);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.submitted = true;
    const comment: Comment = {
      postId: 1,
      id: 2,
      name: this.comment.name,
      email: this.comment.email,
      body: this.comment.body,
    };
    this.comments.push(comment);
  }

  resetCommentForm() {
    this.submitted = false;
    this.comment = new CommentForm();
  }

  private _filter(email: string): string[] {
    console.log('_filter');
    const filterValue = email.toLowerCase();
    return this.emails.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
