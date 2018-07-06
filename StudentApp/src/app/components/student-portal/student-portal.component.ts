import { Component } from '@angular/core';
import { Student } from '../../imports';

@Component({
  selector: 'student-portal',
  templateUrl: './student-portal.component.html'
})
export class StudentPortalComponent extends Student {

  constructor() {
    super();
  }

}
