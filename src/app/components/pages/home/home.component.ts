import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public appName = appName;
  public isLoggedIn: boolean = false;

  constructor(
    private Title: Title,
    private Auth: AuthService
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`${this.appName} - Free notebook for everyone`);
    this.isLoggedIn = this.Auth.loggedIn();
  }

}
