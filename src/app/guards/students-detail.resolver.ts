import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Student } from '../entities/student';
import { StudentsService } from '../shared/students.service';

export const studentsDetailResolver: ResolveFn<Student | undefined> = (route, state) => {
  console.log('studentsDetailResolver: ResolveFn');
  const studentsService = inject(StudentsService);
  const id = route.params['id'];
  const student = studentsService.getStudent(id);
  return student;
};
