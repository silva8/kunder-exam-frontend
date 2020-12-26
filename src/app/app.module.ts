import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BannerService } from './banner.service';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { SuperBannerComponent } from '../components/super-banner/super-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuperBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
