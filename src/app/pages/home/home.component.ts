import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {GithubApiService} from '@shared/services/github-api.service';

import {Organization} from '@shared/models/organization.model';
import {Repository} from '@shared/models/repository.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  tabMenu: MenuItem[];
  placeholderUsername: string;
  username: string;
  repositories: Repository[];
  organizations: Organization[];

  constructor(private githubApi: GithubApiService) { }

  ngOnInit() {
    this.placeholderUsername = 'username';
    this.username = '';
  }

  getUserData = (username) => {
    if(username){
      this.githubApi.getRepos(username).subscribe( repos => {
        this.repositories = repos;
      });
      this.githubApi.getOrgs(username).subscribe( orgs => {
        this.organizations = orgs;
      });
    } else {
      this.repositories = [];
      this.organizations = [];
    }
  }

}
