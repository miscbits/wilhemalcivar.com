import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { CareerComponent } from './career/career.component';
import { TournamentReportComponent } from './tournament-report/tournament-report.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { BlogComponent } from './blog/blog.component';
import { TutorialComponent } from './tutorial/tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CareerComponent,
    TournamentReportComponent,
    HeroComponent,
    BlogComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
