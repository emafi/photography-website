import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoudoirComponent } from './home/boudoir/boudoir.component';
import { NatureComponent } from './home/nature/nature.component';
import { PeopleComponent } from './home/people/people.component';
import { UrbanComponent } from './home/urban/urban.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path : 'boudoir', component: BoudoirComponent},
  {path : 'nature', component: NatureComponent},
  {path : 'people', component: PeopleComponent},
  {path : 'urban', component: UrbanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
