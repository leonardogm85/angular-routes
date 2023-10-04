import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { studentsGuard } from '../guards/students.guard';
import { studentFormGuard } from '../guards/student-form.guard';
import { studentsDetailResolver } from '../guards/students-detail.resolver';

const routes: Routes = [
  { path: '', component: StudentsComponent, canActivateChild: [studentsGuard], children: [
    { path: 'not-found', component: StudentNotFoundComponent },
    { path: 'create', component: StudentFormComponent, canDeactivate: [studentFormGuard] },
    { path: ':id', component: StudentDetailComponent, resolve: { student: studentsDetailResolver } },
    { path: ':id/edit', component: StudentFormComponent, canDeactivate: [studentFormGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
