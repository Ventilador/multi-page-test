import { NgModule } from '@angular/core';
import { SecondDashboardModule } from './lib/second-dashboard.module';
import { SecondDashboardComponent } from './lib/second-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    SecondDashboardModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [SecondDashboardComponent]
})
export class AppModule { }
