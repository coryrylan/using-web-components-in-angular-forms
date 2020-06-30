import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  count = 1;
  count2 = 3;
  counter = new FormControl(2, Validators.min(0));

  updateCount(event: any) {
    this.count = event.detail;
  }
}
