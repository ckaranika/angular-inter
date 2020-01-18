export class Repository {
  
  name: string;
  html_url: string;

  constructor(name: string, html_url: string){
    this.name = name;
    this.html_url = html_url;
  }
};
