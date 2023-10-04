import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CoursesService } from '../shared/courses.service';
import { Course } from '../entities/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  page?: number;

  courses?: Course[];

  subscription?: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();

    this.subscription = this._activatedRoute
      .queryParams
      .subscribe((value: Params) => this.page = parseInt(value['page']));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  nextPage(): void {
    this.page
      ? this.page++
      : 1;
    this._router.navigate(['/courses'], { queryParams: { 'page': this.page } });
  }

}
