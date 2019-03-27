import { NgModule } from '@angular/core';
import { SecondComponentModule } from './lib/second-component.module';
import { SecondComponentComponent } from './lib/second-component.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    SecondComponentModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [SecondComponentComponent]
})
export class AppModule { }
