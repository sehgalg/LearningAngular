import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdToolbarModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    MdToolbarModule,
    MdGridListModule,
    MdInputModule,
    MdFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
