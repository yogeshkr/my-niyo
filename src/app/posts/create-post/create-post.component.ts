import { Component } from "@angular/core";
import { Post} from "../list-post/post.model"
import { NgForm } from "@angular/forms";
import { postService } from "../posts.service";
@Component({
   selector:"app-create-post",
   templateUrl:"./create-post.component.html",
   styleUrls:['./create-post.component.css']
})
export class CreatePostComponent{
  enteredTitle="";
  enteredContent="";
  constructor(public postService:postService){

  }
  onAddPost(form: NgForm){
    if(form.invalid){
      return false;
    }
    const post: Post={
      title:form.value.title,
      content:form.value.content
    };
    this.postService.setPosts(post);
  }
}
