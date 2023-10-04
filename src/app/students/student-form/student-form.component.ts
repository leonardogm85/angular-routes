import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs';

import { StudentsService } from 'src/app/shared/students.service';
import { Student } from 'src/app/entities/student';
import { IFormDeactivate } from 'src/app/entities/form-deactivate';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements IFormDeactivate, OnInit, OnDestroy {

  student: Student = new Student();

  subscription?: Subscription;

  isChanged: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.subscription = this._activatedRoute
      .params
      .subscribe((value: Params) => {
        const student = this._studentsService.getStudent(value['id']);

        if (student) {
          this.student = student;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onInput(): void {
    this.isChanged = true;
  }

  canDeactivate(): boolean {
    if (this.isChanged) {
      return confirm('Are you sure you want to leave this page?');
    }

    return true;
  }

}
