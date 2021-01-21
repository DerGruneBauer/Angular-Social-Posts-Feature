import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { Post } from '../post';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

@Output() submitted = new EventEmitter;

post: Post = {title: '', thought: ''}

  constructor() { }

  ngOnInit(): void {
  }

  submitPost(){
    this.submitted.emit(this.post)
  }


}
