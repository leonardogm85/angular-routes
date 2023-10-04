import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentsService } from '../shared/students.service';
import { Student } from '../entities/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private _router: Router,
    private _studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.students = this._studentsService.getStudents();
  }

  onCreate(): void {
    this._router.navigate(['students', 'create']);
  }

}
