import { Injectable } from '@angular/core';

import { Student } from '../entities/student';

@Injectable()
export class StudentsService {

  private _students: Student[] = [
    { id: 1, name: 'Name01', email: 'name01@gmail.com' },
    { id: 2, name: 'Name02', email: 'name02@gmail.com' },
    { id: 3, name: 'Name03', email: 'name03@gmail.com' },
    { id: 4, name: 'Name04', email: 'name04@gmail.com' }
  ];

  getStudents() {
    return this._students;
  }

  getStudent(id: string): Student | undefined {
    return this._students.find(student => student.id!.toString() === id);
  }

}
