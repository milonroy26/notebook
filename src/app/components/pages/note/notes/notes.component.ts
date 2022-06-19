import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';
import { AuthService } from 'src/app/services/auth.service';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public appName = appName;

  // input note data
  public inNoteTitle: string = '';
  public inNoteDescription: string = '';
  
  public notes: any;

  constructor(
    private Title: Title,
    private Auth: AuthService,
    private Note: NoteService
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`Notes - ${this.appName}`);
    this.loadNotes();
  }

  logOut(){
    if(confirm('Are you sure want to logout?')){
      this.Auth.logOut();
    }
  }

  createNote(){
    const note = {
      title: this.inNoteTitle,
      description: this.inNoteDescription
    }

    this.Note.create(note)
    .subscribe(data => {
      alert('Note Created');
      this.ngOnInit();
      this.inNoteDescription = '';
      this.inNoteTitle = '';
    }, error => {
      alert(error.error.error);
    });
  }

  loadNotes(){
    this.Note.list(0, 100)
    .subscribe(data => {
      this.notes = data;
    })
  }

  delete(noteId: any){
    if(confirm('Are you sure want to delete?')){
      this.Note.delete(noteId)
      .subscribe(data => {
        alert('Note Delted');
        this.ngOnInit();
      }, error => {
        alert(error.error.error);
      });
    }
  }

}
