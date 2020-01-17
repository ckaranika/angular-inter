import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Organization } from '@shared/models/organization.model';
import { Repository } from '@shared/models/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) {}

  getRepos(username): Observable<Repository[]> {
    const url = `${environment.githubApi}/users/${username}/repos?per_page=250`;
    return this.http.get<Repository[]>(url)
    .pipe(map(res => {
        return res.map(repo => {
          return new Repository(
            repo.name,
            repo.html_url
          );
        });
      })
    );
  }

  getOrgs(username): Observable<Organization[]> {
    const url = `${environment.githubApi}/users/${username}/orgs`;
    return this.http.get<Organization[]>(url)
    .pipe(map(res => {
        return res.map(org => {
          return new Organization(
            org.login,
            org.description,
            org.avatar_url
          );
        });
      })
    );
  }
}
