import { NgModule } from '@angular/core';
import { HeaderModule } from './lib/header.module';
import { HeaderComponent } from './lib/header.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    HeaderModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
