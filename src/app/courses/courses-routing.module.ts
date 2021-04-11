import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';

const routes: Routes = [
  // { path: '', redirectTo : 'list' },
  //{ path: '', component: CoursesComponent },
  {
    path: '',
    component: CoursesComponent,
    children: [
      { 
        path: '',
        component : CoursesListComponent 
      },
      {
        path: 'new',
        component : CoursesFormComponent
      },
      {
        path: ':id',
        component : CoursesDetailsComponent 
      },
      
    ]
  },
  {
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
