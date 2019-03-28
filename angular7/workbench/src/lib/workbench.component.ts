import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workbench',
  template: `
    <p>
    <button mat-button></button>
      workbench works!
    </p>
  `,
  styles: []
})
export class WorkbenchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
