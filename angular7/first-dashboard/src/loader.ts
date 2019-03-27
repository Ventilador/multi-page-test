import { NgModule } from '@angular/core';
import { FirstDashboardModule } from './lib/first-dashboard.module';
import { FirstDashboardComponent } from './lib/first-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    FirstDashboardModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [FirstDashboardComponent]
})
export class AppModule { }
