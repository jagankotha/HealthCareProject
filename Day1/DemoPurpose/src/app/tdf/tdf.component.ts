import { Component, NgModule, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  course =['Angular','React','Vue','Bootstrap','MongoDB'];

  constructor() { }


   studentModel = new Student('','mohan','jagan@gmail.com','male','Angular',true);
  ngOnInit(): void {
  }

  onSubmit(myVal:Student){
    console.log("course   "+myVal.course);
    console.log("firstname "+myVal.firstname);
  }

}
