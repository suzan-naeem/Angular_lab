import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private with no setter
  private _authSubject = new BehaviorSubject<boolean>(false); //observer

  get authSubjectObservable() : Observable<boolean>{
    return this._authSubject.asObservable();
  }

  broadcastAuthValue(value: boolean) : void {
    this._authSubject.next(value);
  }
  constructor() { }
}
