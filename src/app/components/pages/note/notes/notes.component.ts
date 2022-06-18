import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public appName = appName;

  constructor(
    private Title: Title,
    private Auth: AuthService
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Notes - ${this.appName}`);
  }

  logOut(){
    if(confirm('Are you sure want to logout?')){
      this.Auth.logOut();
    }
  }

}
