import { NgModule } from '@angular/core';
import { WorkbenchComponent } from './workbench.component';
import { HeaderModule } from 'header';
@NgModule({
  declarations: [WorkbenchComponent],
  imports: [
    HeaderModule
  ],
  exports: [WorkbenchComponent]
})
export class WorkbenchModule { }
