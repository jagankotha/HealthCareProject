import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private REST_API_SERVER = "http://localhost:9090/employee/all";

  public baseUrl="http://localhost:9090/emloyee/all";
  
  students:any = [];

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public getData() {
    console.log("at the fist step of the getData method");
    this.httpClient.get<any[]>(this.baseUrl)
             .subscribe(data => {

              console.log("in side the getData method "+ this.baseUrl);
                 this.students= data;
             },
             error => {
               console.log("error occured");
             }
    );

    return this.students;
  }
}
