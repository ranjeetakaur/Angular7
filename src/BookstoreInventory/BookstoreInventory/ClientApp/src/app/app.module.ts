import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { AppRoutingModule } from './app.routing.module';

import { HomeModule } from './home/home.module';

//services
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HomeModule,
    AppRoutingModule
    
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
