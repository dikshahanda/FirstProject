import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BannerComponent } from './banner/banner.component';
import { TaskComponent } from './task/task.component';
// import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginPage2Component } from './login-page2/login-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BannerComponent,
    TaskComponent,
    FooterComponent,
    LoginPageComponent,
    AboutUsComponent,
    LoginPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
