import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  studentData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.restApi.getStudent(this.id).subscribe((data: {}) => {
      this.studentData = data;
    });
  }

  // Update student data
  updateStudent(): void {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateStudent(this.id, this.studentData).subscribe(data => {
        this.router.navigate(['/student-list']);
      });
    }
  }

}
