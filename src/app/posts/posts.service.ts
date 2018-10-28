
import { Post } from './list-post/post.model'
import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
@Injectable({providedIn:'root'})
export class postService{
 private  posts: Post[]=[];
 private postsUpdated= new Subject<Post[]>();
 getPosts(){
   return [...this.posts];
 }
 getPostsUpadated(){
   return this.postsUpdated.asObservable();
 }
 setPosts(post:Post){
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
 }
}
