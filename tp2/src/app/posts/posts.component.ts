import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts?: Post[];

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }

  selectPost(id: number): void {
    this.router.navigate([`/post/${id}`]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

  //   this.posts?.filter(containsValue).
  // }

  // containsValue(element, index, array) {
  //   return (element >= 10);
 }

}
