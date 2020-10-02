import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  studentDetails = { name: '', email: '', phone: 0 };

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() { }

  addStudent(studentData = null): void {
    this.restApi.createStudent(this.studentDetails).subscribe((data: {}) => {
      this.router.navigate(['/student-list']);
    });
  }
}
