import { NgModule } from '@angular/core';
import { WorkbenchModule } from './lib/workbench.module';
import { WorkbenchComponent } from './lib/workbench.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    WorkbenchModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [WorkbenchComponent]
})
export class AppModule { }
