import { Component } from '@angular/core';

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'directives-example';

  public colorChanged(color: string) {
    console.log(color);
  }
}
