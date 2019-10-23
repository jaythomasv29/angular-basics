import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TwowayComponent } from './twoway/twoway.component';
import { DirectoryComponent } from './directory/directory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwowayComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
