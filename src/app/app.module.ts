import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotesComponent } from './components/pages/note/notes/notes.component';
import { CreatenoteComponent } from './components/pages/note/createnote/createnote.component';
import { ViewnoteComponent } from './components/pages/note/viewnote/viewnote.component';
import { ErrorComponent } from './components/pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NotesComponent,
    CreatenoteComponent,
    ViewnoteComponent,
    ErrorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
