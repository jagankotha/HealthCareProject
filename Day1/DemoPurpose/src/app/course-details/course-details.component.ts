import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Emp } from '../emp';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  public courseID: any;

  public emp: Emp = new Emp(1, 'jagan', 'pbp');
  constructor(
    private _activateRoute: ActivatedRoute,
    private _httpClient: HttpClient
  ) {}

  ngOnInit() {
    let courseId = this._activateRoute.snapshot.paramMap.get('id');
    console.log('courseId  ' + courseId);
    this._httpClient
      .get('http://localhost:8989/student/byId/' + courseId)
      .subscribe((data) => {
        console.log('subscribe data is  the ' + JSON.stringify(data));
        var jsonData = JSON.parse(JSON.stringify(data));
        console.log('jsondata ' + jsonData['id']);
        this.courseID = data;
        this.emp.id = jsonData['id'];
        this.emp.jaganName = jsonData['jaganName'];
        this.emp.jaganAddr = jsonData['jaganAddr'];
        console.log('data is of data ' + data);
      });
  }

  onUpdate(data:any) {
  console.log(data.value);
    this._httpClient
      .put('http://localhost:8989/student/updateStd', data.value)
      .subscribe((localData) => {
        console.log('data updated successful   ' + localData);
      });
  }
  
}
