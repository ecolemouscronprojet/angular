import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'test - 1';
  total: number = 0;


  public count(): void {
    this.total++;
  }

  
}
