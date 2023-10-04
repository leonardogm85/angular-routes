import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'not-found', component: CourseNotFoundComponent },
  { path: ':id', component: CourseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
