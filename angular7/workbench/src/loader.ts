import { NgModule } from '@angular/core';
import { WorkbenchModule } from './lib/workbench.module';
import { WorkbenchComponent } from './lib/workbench.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material';
import { HeaderModule } from '@angular/header';
@NgModule({
  declarations: [WorkbenchComponent],
  imports: [
    MatButtonModule,
    HeaderModule
  ],
  exports: [WorkbenchComponent],
  bootstrap: [WorkbenchComponent]
})
export class AppModule { }
