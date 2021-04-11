import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  message:string;
  users : User[] = [
      {name:'mohamed', age:35, job:'student'},
      {name:'ahmed', age:40, job:'doctor'},
      {name:'marwa', age:25, job:'engineer'},
      {name:'mahmoud', age:15},
      {name:'walaa', age:30, job:'developer'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  recieveMessage(msg): void {
    this.message = msg;
  }

}
