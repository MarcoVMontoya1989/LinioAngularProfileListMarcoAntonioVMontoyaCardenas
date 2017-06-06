import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

import { GithubService } from 'app/Services/github.service';
import { AboutComponent } from './extra/about/about.component';
import { ContactComponent } from './extra/contact/contact.component';

//routing
import { routing } from './routing/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
