import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit,OnDestroy {
  id;
  private _routeParamSub: Subscription;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
      this._route.paramMap.subscribe(paramMap => {
          this.id = paramMap.has('id') ? paramMap.get('id') : null;
      });
  }

  ngOnDestroy(): void {
    this._routeParamSub.unsubscribe();
  }

}
