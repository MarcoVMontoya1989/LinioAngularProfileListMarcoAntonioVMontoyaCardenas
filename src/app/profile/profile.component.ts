import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [GithubService]
})
export class ProfileComponent implements OnInit {

  user: any;
  repo: any[];
  username: string;

  constructor(private service: GithubService) {

  }

  ngOnInit() {

    this.user = false;

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //                       TEST ONLY
    // // get user information
    // this.service.getGithubUser().subscribe(userGit => {
    //   console.log(userGit);
    //   this.user = userGit;
    // });
    //
    // // get user repositories
    // this.service.getGithubRepository().subscribe(userRepo => {
    //   console.log(userRepo);
    //   this.repo = userRepo;
    // });
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  }

  OnSearchUser() {
    // get user information
    this.service.getGithubUser().subscribe(userGit => {
      console.log(userGit);
      this.user = userGit;
    });

    // get user repositories
    this.service.getGithubRepository().subscribe(userRepo => {
      console.log(userRepo);
      this.repo = userRepo;
    });

    this.service.SearchAgain(this.username);
  }


}
