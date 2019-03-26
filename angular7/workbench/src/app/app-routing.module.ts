import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path: '',
  loadChildren: '../../../node_modules/@test/content/dist/content/main#AppModuleNgFactory'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
