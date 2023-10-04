import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { StudentsService } from '../shared/students.service';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent,
    StudentDetailComponent,
    StudentNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
