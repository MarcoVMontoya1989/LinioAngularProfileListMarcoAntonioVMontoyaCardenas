import { Component } from '@angular/core';
import { GithubService } from './Services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GithubService]
})
export class AppComponent {
}

/* # Challenge - Frontend Developer
Using the GitHub API, create a small Angular 4 application that shows a
list of your public repositories.

# Requirements
* Angular 4
* TypeScript

# Documentation
* https://developer.github.com/v3/repos/#list-your-repositories

# Submission
Just create a public repository on your GitHub account and send the link to us. */


/*
* MacBook-Pro-de-Marco:GithubProfileList marcov$ ng -v
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
 @angular/cli: 1.0.4
 node: 6.10.3
 os: darwin x64
 @angular/common: 4.1.3
 @angular/compiler: 4.1.3
 @angular/core: 4.1.3
 @angular/forms: 4.1.3
 @angular/http: 4.1.3
 @angular/platform-browser: 4.1.3
 @angular/platform-browser-dynamic: 4.1.3
 @angular/router: 4.1.3
 @angular/cli: 1.0.4
 @angular/compiler-cli: 4.1.3

 * */
