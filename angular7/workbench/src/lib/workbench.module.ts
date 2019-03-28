import { NgModule } from '@angular/core';
import { WorkbenchComponent } from './workbench.component';
import { MatButtonModule } from '@angular/material';
import { HeaderModule } from '@angular/header';

@NgModule({
  declarations: [WorkbenchComponent],
  imports: [
    MatButtonModule,
    HeaderModule
  ],
  exports: [WorkbenchComponent]
})
export class WorkbenchModule { }