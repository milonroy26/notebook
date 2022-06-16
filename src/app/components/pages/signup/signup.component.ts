import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public appName = appName;

  constructor(
    private Title: Title
  ) {}

  ngOnInit(): void {
    this.Title.setTitle(`Signup - ${this.appName}`);
  }

}
