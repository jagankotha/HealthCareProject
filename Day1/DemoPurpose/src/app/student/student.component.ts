import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  onSubmit(formData: Object) {
    console.log('form data... ' + formData.valueOf);
  }
  constructor() {}
  // onSubmit() {}

  ngOnInit(): void {}

  name: string = 'Steve';

  greet(Str:Object): void {
   



    console.log("name "+Str);
  }
}
