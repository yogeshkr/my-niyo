import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post} from "./post.model"
import { postService } from "../posts.service";
import { Subscription} from 'rxjs'
@Component({
  selector:'app-list-post',
  templateUrl:'./list-post.compenet.html',
  styleUrls:['./list-post.compnent.css']
})
export class ListPostComponent implements OnInit,OnDestroy{
 posts: Post[]=[];
 private posSub=new Subscription();
 constructor(public postService:postService){}
 ngOnInit(){
  this.posts=this.postService.getPosts();
  this.posSub=this.postService.getPostsUpadated().subscribe((posts:Post[])=>{
    this.posts= posts;
  });
 }
 ngOnDestroy(){
  this.posSub.unsubscribe();
 }
}
