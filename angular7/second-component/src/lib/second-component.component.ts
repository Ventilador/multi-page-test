import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
    <p>
      second-component works!
    </p>
  `,
  styles: []
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
