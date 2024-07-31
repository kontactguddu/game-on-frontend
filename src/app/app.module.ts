import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/global/header/header.component';
import { FooterComponent } from './component/global/footer/footer.component';
import { HomeComponent } from './component/pages/home/home.component';
import { BlogComponent } from './component/pages/blog/blog.component';
import { ContactUsComponent } from './component/pages/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleTransformPipe } from './pipe/title-transform.pipe';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TitleTransformPipe,
    CarouselModule.forRoot() // Importing CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
