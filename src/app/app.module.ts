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
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { NoteService } from './services/note.service';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NotesComponent,
    CreatenoteComponent,
    ViewnoteComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    NoteService,
    [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
