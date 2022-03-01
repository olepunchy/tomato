import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GithubButtonComponent } from './github-button/github-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GithubButtonComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
