import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit/*, OnDestroy*/ {
  userName:string = "Ali";
  isLoggedIn: boolean;
  private _authSub: Subscription;
  constructor(private _authService:AuthService) { 
    
  }

  ngOnInit(): void {
    this._authSub = this._authService.authSubjectObservable.subscribe((data:boolean) => {
      console.log(data);
      this.isLoggedIn = data;
    });
  }


  onInput(): void {
    console.log(this.userName);
  }

  login(): void {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
    this._authService.broadcastAuthValue(true);
  }

  logout(): void {
    this.userName = '';
    this.isLoggedIn = false;
    console.log(this.isLoggedIn);
    this._authService.broadcastAuthValue(false);
  }

  // ngOnDestroy(): void {
  //   this._authSub.unsubscribe();
  // }

}
