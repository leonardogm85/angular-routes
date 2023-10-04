import { Injectable } from '@angular/core';

import { Course } from '../entities/course';

@Injectable()
export class CoursesService {

  private _courses: Course[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' }
  ];

  getCourses() {
    return this._courses;
  }

  getCourse(id: string): Course | undefined {
    return this._courses.find(course => course.id!.toString() === id);
  }

}
