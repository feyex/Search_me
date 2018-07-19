import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { SquareComponent } from './square/square.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SquareComponent,
   
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

