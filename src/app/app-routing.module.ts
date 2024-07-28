import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { BlogComponent } from './component/pages/blog/blog.component';
import { ContactUsComponent } from './component/pages/contact-us/contact-us.component';
import { AboutUsComponent } from './component/pages/about-us/about-us.component';
import { MlComponent } from './component/pages/ml/ml.component';
import { FunZoneComponent } from './component/pages/fun-zone/fun-zone.component';
import { FeedbackComponent } from './component/pages/feedback/feedback.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'ml', component: MlComponent },
  { path: 'fun-zone', component: FunZoneComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
