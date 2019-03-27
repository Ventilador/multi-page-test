import { NgModule } from '@angular/core';
import { FirstComponentModule } from './lib/first-component.module';
import { FirstComponentComponent } from './lib/first-component.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    FirstComponentModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [FirstComponentComponent]
})
export class AppModule { }
