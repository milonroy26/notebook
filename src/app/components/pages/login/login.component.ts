import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public appName = appName;

  constructor(
    private Title: Title
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Login - ${this.appName}`);
  }

}
