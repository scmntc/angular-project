import { GitHubUsuario } from './../../models/usuarioGitHub';
import { GithubService } from './../../services/GithubService';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GithubService]
})
export class HomeComponent implements OnInit {

  @Input() value : string;
  usuario : GitHubUsuario;
  repositories : object[] = [];

  constructor(private githubService : GithubService) { }

  pesquisarUsuario() {
    this.githubService.getUsuario(this.value)
    .subscribe((value : GitHubUsuario) => {
      this.usuario = value;
      if (this.usuario.repos_url) { 
        this.githubService.getRepositories(this.value)
          .subscribe((response : object[]) => {
            this.repositories = response;
          }, (error) => {
            console.log(error);
          });
      }
    }, (error) => {
      alert("Usuario inexistente");
    });
  }

  ngOnInit(): void {
  }

}
