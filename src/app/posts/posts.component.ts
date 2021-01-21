import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

@Input() post: Post = {title: '', thought: ''};
@Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleted.emit(this.post)
  }

}
