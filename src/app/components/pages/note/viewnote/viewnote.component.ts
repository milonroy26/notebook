import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';


@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.scss']
})
export class ViewnoteComponent implements OnInit {
  public appName = appName;


  constructor(private Title: Title) { }

  ngOnInit(): void {
    this.Title.setTitle(`Preview Note - ${this.appName}`);
  }

}
