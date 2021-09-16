import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { TdfComponent } from './tdf/tdf.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpComponent } from './emp/emp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    TdfComponent,
    StudentdetailsComponent,
    EmpComponent,
    HomepageComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
