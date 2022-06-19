import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { appName } from 'src/app/app.config';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.scss']
})
export class ViewnoteComponent implements OnInit {
  public appName = appName;

  public noteId: any;
  public note: any;


  constructor(
    private Title: Title,
    private Note: NoteService,
    private ActiveRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Preview Note - ${this.appName}`);
    this.noteId = this.ActiveRoute.snapshot.paramMap.get('id');
    this.loadSingleNote();
  }

  loadSingleNote(){
    this.Note.findOne(this.noteId)
    .subscribe(data => {
      const rawDate = new Date(data.date);
      data.date = rawDate.toLocaleDateString('en-US',
      { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'});
      this.note = data;
    })
  }

}
