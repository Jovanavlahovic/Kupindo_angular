import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovineComponent } from './core/novine/novine.component';
import { PretragaComponent } from './pretraga/pretraga.component';

const routes: Routes = [
  {path: 'pretraga', component: PretragaComponent},
  {path: 'novine', component: NovineComponent},
  {path: '', redirectTo: 'pretraga', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
