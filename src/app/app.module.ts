import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/global/header/header.component';
import { FooterComponent } from './component/global/footer/footer.component';
import { HomeComponent } from './component/pages/home/home.component';
import { BlogComponent } from './component/pages/blog/blog.component';
import { ContactUsComponent } from './component/pages/contact-us/contact-us.component';
import { RunningManComponent } from './funzone/running-man/running-man.component';
import { SpeedTestComponent } from './funzone/speed-test/speed-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    ContactUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
