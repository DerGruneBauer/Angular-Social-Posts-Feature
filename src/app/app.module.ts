import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './social-posts/social-posts.component';
import { PostsComponent } from './posts/posts.component';
import { FormPostComponent } from './form-post/form-post.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    PostsComponent,
    FormPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
