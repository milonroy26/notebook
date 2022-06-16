import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public appName = appName;

  constructor(private Title: Title) { }

  ngOnInit(): void {
    this.Title.setTitle(`Notes - ${this.appName}`);
  }

}
