import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { appName } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public appName = appName;

  // Input data variables
  public inName: string = '';
  public inEmail: string = '';
  public inPassword: string = '';

  constructor(
    private Title: Title,
    private Auth: AuthService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.Title.setTitle(`Signup - ${this.appName}`);
    if(this.Auth.loggedIn() == true){
      this.Router.navigate(['/notes']);
    }
  }

  signUp(){
    const userInfo = {
      name: this.inName,
      email: this.inEmail,
      password: this.inPassword
    }

    this.Auth.register(userInfo)
    .subscribe(data => {
      localStorage.setItem('token', data.token);
      this.Router.navigate(['/notes']);
    }, error => {
      alert('Signup Error');
      console.log(error.error);
    })
  }

}
