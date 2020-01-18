export class Organization {

  login: string;
  description: string;
  avatar_url: string;

  constructor(login: string, description: string, avatar_url: string){
    this.login = login;
    this.description = description;
    this.avatar_url = avatar_url;
  }
}
