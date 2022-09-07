import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPost(id).subscribe(
      (post) => {
        this.post = post;
        this.getComments(id);
        return this.post;
      });
  }

  getComments(postId: number): void {
    this.commentsService
      .getComments()
      .pipe(map(comments => comments.filter((comment) => comment.postId == postId)))
      .subscribe((comments) => (this.comments = comments));
  }

  goBack(): void {
    this.location.back();
  }
}
