import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sliders: Array<any> = [];

  constructor() { 

    this.sliders.push(
      {
          imagePath: 'assets/img/about/a.jpg',
          label: 'Welcome To Naija Search!',
          text:
              'It`s Nice To Meet You.'
      },
      {
          imagePath: 'assets/img/about/5.jpg',
          label: 'Welcome To Naija Search!',
          text: 'It`s Nice To Meet You.'
      },
      {
          imagePath: 'assets/img/about/Dance.jpg',
          label: 'Welcome To Naija Search!',
          text:
          'It`s Nice To Meet You.'
      }
    );

  }

  ngOnInit() {
  }

}
