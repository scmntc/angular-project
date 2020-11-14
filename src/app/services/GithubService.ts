import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {
  constructor(private http : HttpClient) { }

  url : string = 'https://api.github.com/users/';

  getUsuario(usuario : string) {
    return this.http.get(this.url.concat(usuario));
  }

  getRepositories(usuario : string) {
      return this.http.get(this.url.concat(usuario) + '/repos');
  }
}