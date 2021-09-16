import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { EmpComponent } from './emp/emp.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: "student",
    component: StudentComponent,
  },
  {
    path: "employee",
    component: EmpComponent,
  },
  {
    path: "studentList",
    component: StudentComponent,
  },
  {
    path: "course",
    component: CourseComponent,
  },
  {
    path:"course/:id", component:CourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
