import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { HomeComponent } from './home.component';

// modules
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    BrowserModule,
    SharedModule
   
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    
  ],
  exports: [

  ]
})

export class HomeModule {

}
