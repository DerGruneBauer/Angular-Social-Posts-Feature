import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {


  posts: Post[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  showPostForm: boolean = false;

  onSubmit(post: Post){
    this.posts.push(post);
    this.showPostForm = false;
    document.querySelector('.test').classList.remove("darken");
    document.querySelector('.wrapper').classList.remove("darken");
    document.querySelector('.newThoughtButton').classList.remove("darken");
    document.querySelector('.postsWrapper').classList.remove("darken");
  }

  onDelete(i: number){
    this.posts.splice(i, 1);
  }

  darken(){
    document.querySelector('.test').classList.add("darken");
    document.querySelector('.wrapper').classList.add("darken");
    document.querySelector('.newThoughtButton').classList.add("darken");
    document.querySelector('.postsWrapper').classList.add("darken");
  }
}
