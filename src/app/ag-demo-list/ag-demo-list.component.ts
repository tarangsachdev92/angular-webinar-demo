import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-ag-demo-list',
  templateUrl: './ag-demo-list.component.html',
  styleUrls: ['./ag-demo-list.component.css']
})
export class AGDemoListComponent implements OnInit {

  studentList: any = [];

  constructor(
    public restApi: RestApiService
  ) { }
  columnDefs = [
    { field: 'id' },
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'name' },
    { field: 'email' },
    { field: 'phone' },
    { field: 'id1' },
    { field: 'make1' },
    { field: 'model1' },
    { field: 'price1' },
    { field: 'name1' },
    { field: 'email1' },
    { field: 'phone1' },
  ];

  rowData = [
    {
      make: 'Toyota', model: 'Celica', price: 35000, name: 'Tarang Sachdev',
      email: 'tarangsachdev@gmail.com', phone: '2', id: 1,
      make1: 'Toyota', model1: 'Celica', price1: 35000, name1: 'Tarang Sachdev',
      email1: 'tarangsachdev@gmail.com',
      phone1: '2',
      id1: 1,
    },
    {
      make: 'Ford', model: 'Mondeo', price: 32000, name: 'Tesst',
      email: 'test', phone: '12', id: 2,
      make1: 'Ford', model1: 'Mondeo', price1: 32000, name1: 'Tesst',
      email1: 'test', phone1: '12', id1: 2
    },
    {
      make: 'Porsche', model: 'Boxter', price: 72000, name: 'Tesst',
      email: 'testjsej@gmail.com', phone: '12', id: 3,
      make1: 'Porsche', model1: 'Boxter', price1: 72000, name1: 'Tesst',
      email1: 'testjsej@gmail.com',
      phone1: '12',
      id1: 3
    }
  ];

  ngOnInit() {
  }

}
