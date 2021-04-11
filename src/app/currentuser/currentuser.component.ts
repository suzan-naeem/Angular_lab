import { Subscription } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-currentuser',
  templateUrl: './currentuser.component.html',
  styleUrls: ['./currentuser.component.scss']
})
export class CurrentuserComponent implements OnInit/*, OnDestroy*/ {

  isLoggedIn:boolean;
  private _authSub: Subscription;
  @Input() user;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this._authService.authSubjectObservable.subscribe((data:boolean) => {
      console.log(data);
      this.isLoggedIn = data;
    });
  }

  sendMessage(): void {
    this.messageEvent.emit(`you have clicked on ${this.user.name}.`);
  } 

  // ngOnDestroy(): void {
  //   this._authSub.unsubscribe();
  // }
}
