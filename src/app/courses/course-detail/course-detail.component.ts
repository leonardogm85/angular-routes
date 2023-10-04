import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CoursesService } from '../../shared/courses.service';
import { Course } from 'src/app/entities/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  course?: Course;

  subscription?: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.subscription = this._activatedRoute
      .params
      .subscribe((value: Params) => {
        this.course = this._coursesService.getCourse(value['id']);

        if (!this.course) {
          this._router.navigate(['courses/not-found']);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
