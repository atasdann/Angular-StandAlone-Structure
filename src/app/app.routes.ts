import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PostComponent } from '../components/post/post.component';
import { CommentComponent } from '../components/post/comment/comment.component';
import { NotFoundComponent } from '../components/error_pages/not-found/not-found.component';

export const routes: Routes = [
  {path:'',component:Page1Component},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'posts',children:[ //posts is not alone component by itself
    {path:'view', component:PostComponent},
    {path:'comments/:id',component:CommentComponent}
  ]},
  {path:"**",component:NotFoundComponent} // **:path ne olursa olsun anlamında
];
