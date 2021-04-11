import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  {
    path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
