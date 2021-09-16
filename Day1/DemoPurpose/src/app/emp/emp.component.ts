import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Emp } from '../emp';
declare var $: any;

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent implements OnInit {
  public empData: any = [];

  constructor(private httpClient: HttpClient, private _router: Router) {}

  ngOnInit() {
    this.getAllData();

    $(document).ready(function () {
      function validateField(val: String) {
        if (val.trim().length === 0 || val === null || val === undefined) {
          console.log('value of the length ' + val.trim().length);
          return false;
        } else {
          console.log('value of the length ' + val.trim().length);
          return true;
        }
      }

      $('#btn1').click(function () {
        $('p').hide();
      });
      $('#btn2').click(function () {
        $('p').show();
      });

      $('#jaganBtn').click(function () {
        var name = $('#jaganName').val();
        var address = $('#jaganAddr').val();
        var nameValidate = validateField(name);
        var addressValidate = validateField(address);
        var exp = /^[A-Za-z0-9]{3,5}$/;
        console.log('regurlar expression  ' + exp.test(name));
        console.log(
          ' nameValidate   addressValidate' +
            nameValidate +
            '   ' +
            addressValidate
        );
        if (nameValidate) {
          $('#jaganNameError').hide();
        } else {
          $('#jaganNameError').show();
        }
        if (addressValidate) {
          $('#jaganaddrError').hide();
        } else {
          $('#jaganaddrError').show();
        }
        console.log('val is ' + name + address);
      });
    });
  }

  onSubmit(data: any) {
    this.httpClient
      .post('http://localhost:8989/student/create', data.value)
      .subscribe((anotherData) => {
        console.log(
          'after the post call the data is ' + JSON.stringify(anotherData)
        );
      });
  }

  getAllData() {
    this.httpClient
      .get('http://localhost:8989/student/getAll')
      .subscribe((localData) => {
        console.log('local data ' + JSON.stringify(localData));
        this.empData = localData;
      });
  }
  onEdit(x: any) {
    this._router.navigate(['/course', x.id]);
  }

  onDelete(data: Emp) {
    this.httpClient
      .delete('http://localhost:8989/student/delete/' + data.id)
      .subscribe((delDat) => {
        console.log('delData is ' + delDat);
      });
  }
}
