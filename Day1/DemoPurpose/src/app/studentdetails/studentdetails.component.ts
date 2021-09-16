import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { StudentService } from '../student.service';
import { StudetnData } from '../studetn-data';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
})
export class StudentdetailsComponent implements OnInit {

  REST_API_SERVER="http://localhost:9090/employee/all";
  public products = [];
  public studentList = [
    {
      firstnamee: 'jagan',
      lastname: 'mohan',
      email: 'jagan2323@gmail.com',
      gender: 'male',
      course: 'javaScript',
      remember: true,
    },
    {
      firstnamee: 'ram',
      lastname: 'mohan',
      email: 'rammohan@gmail.com',
      gender: 'male',
      course: 'python',
      remember: true,
    },
    {
      firstnamee: 'varsha',
      lastname: 'mohan',
      email: 'javarshagan2323@gmail.com',
      gender: 'male',
      course: 'ows',
      remember: true,
    },
    {
      firstnamee: 'varsha',
      lastname: 'varsha',
      email: 'varsha@gmail.com',
      gender: 'male',
      course: 'java',
      remember: true,
    },
  ];
  constructor(private http: StudentService) { }
  ngOnInit() {
  }
  onSubmit(formData : StudetnData) {
    console.log('form address ' + formData.address);
    console.log('form salary ' + formData.salary);
  }

  onButtonClick(){
    this.http.sendGetRequest().subscribe((data:any )=>{
      console.log("student Details "+data);
      
    })  
  }
  onButtonClick2(){
   


   this.products= this.http.getData();
  }
 

}
