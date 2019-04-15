import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { DeckComponent } from './deck/deck.component';
import { BlogComponent } from './blog/blog.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TournamentReportComponent } from './tournament-report/tournament-report.component';


const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'decks', component: DeckComponent },
  { path: 'tutorials', component: TutorialComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'tournamentreports', component: TournamentReportComponent },
  { path: 'deck/:id', component: ListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
	RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {}
