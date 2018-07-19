import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ HomeComponent } from './home/home.component';
import{ SquareComponent } from './square/square.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component:HomeComponent },
  { path: 'square', component:SquareComponent }
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [
     RouterModule 
    ]
 
})
export class AppRoutingModule { }
