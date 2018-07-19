import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
      CommonModule,
      NgbCarouselModule.forRoot(),
      NgbAlertModule.forRoot()
      
     
  ],
  declarations: [
   
  ]
})
export class HomeModule {}
