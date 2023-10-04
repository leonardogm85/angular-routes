import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { StudentsService } from 'src/app/shared/students.service';
import { Student } from 'src/app/entities/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  student?: Student;

  subscription?: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    // Get student by service

    // this.subscription = this._activatedRoute
    //   .params
    //   .subscribe((value: Params) => {
    //     const student = this._studentsService.getStudent(value['id']);

    //     if (!student) {
    //       this._router.navigate(['students', 'not-found']);
    //     } else {
    //       this.student = student;
    //     }
    //   });

    // Get student by resolver

    console.log('StudentDetailComponent: OnInit');

    this.subscription = this._activatedRoute.data.subscribe(({student}) => {
      console.log('StudentDetailComponent: OnInit, Resolver');

      if (!student) {
        this._router.navigate(['students', 'not-found']);
      } else {
        this.student = student;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onEdit(): void {
    this._router.navigate(['students', this.student?.id, 'edit']);
  }

}
