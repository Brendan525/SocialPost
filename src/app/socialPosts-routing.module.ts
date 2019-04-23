import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SocialPostsComponent } from './social-posts/social-posts.component';
// import { postComponent } from './posts/posts.component.component';
// import { post-FormComponent } from './posts-Form/post-Form.component';

const routes: Routes = [
  // { path: 'social-posts', component: SocialPostsComponent},
  // { path: 'post', component: postComponent},
  // { path: 'post-Form', component: post-FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
