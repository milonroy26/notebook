import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { appName } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public appName = appName;

  public inEmail: string = '';
  public inPassword: string = '';

  constructor(
    private Title: Title,
    private Auth: AuthService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Login - ${this.appName}`);
    if(this.Auth.loggedIn() == true){
      this.Router.navigate(['/notes']);
    }
  }

  login(){
    const loginData = {
      email: this.inEmail,
      password: this.inPassword
    }

    this.Auth.login(loginData)
    .subscribe(data => {
      localStorage.setItem('token', data.token);
      this.Router.navigate(['/notes'])
    }, error => {
      console.log(error.error.message);
    });
  }

}
