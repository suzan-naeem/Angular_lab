import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<h1>Hello</h1>`,
  styleUrls: ['./app.component.scss'],
  /*styles: [
    `h1 {
      background-color : red;
    }`
  ],*/
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'my-app';
  // userName:string = "Ali";
  
}
