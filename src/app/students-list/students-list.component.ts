import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentList: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadStudents();
  }

  // Get students list
  loadStudents(): void {
    this.restApi.getStudents().subscribe((data: {}) => {
      this.studentList = data;
    });
  }


  // Delete student
  deleteStudent(id): void {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteStudent(id).subscribe(data => {
        this.loadStudents();
      });
    }
  }

}
