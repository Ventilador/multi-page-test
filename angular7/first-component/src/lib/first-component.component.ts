import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
    <p>
      first-component works!
    </p>
  `,
  styles: []
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
