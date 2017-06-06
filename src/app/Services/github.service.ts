import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'd8cc94fb80dcd82d4d9a';
  private client_secret = 'd139c810b992b549250fd1b31873c3414a01fb16';

  constructor(private http: Http) {
    console.log('Github Service Ready...');
    this.username = 'anubisvolga1989';
  }

  getGithubUser() {
    return this.http.get('http://api.github.com/users/' + this.username
      + '?client_id=' + this.client_id
      + '&client_secret=' + this.client_secret )
      .map( res => res.json());
  }

  getGithubRepository() {
    return this.http.get('http://api.github.com/users/' + this.username
      + '/repos'
      + '?client_id=' + this.client_id
      + '&client_secret=' + this.client_secret )
      .map( res => res.json());
  }

  // to search another user and show his/her repositories
  SearchAgain(usernamenew: string) {
    this.username = usernamenew;
  }

}
