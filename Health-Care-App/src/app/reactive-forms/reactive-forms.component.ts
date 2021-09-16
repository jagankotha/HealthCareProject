import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  registrationFrom = new FormGroup({
    userName: new FormControl('jagan'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {
    $(document).ready(function () {
      $('#empGenError').hide();
      $('#empLangError').hide();
      $('#empProjError').hide();

      var empGenErrorVal = false;
      var empLangErrorVal = false;
      var empProjErrorVal = false;
     
      function validate_empGenError(){
        var leng = $("input[type='radio'][name='empGen']:checked").length;
        if(leng <=0){
          return true;
          }else{
            return false;
          }
      }

      $("#mybtn").click( function(){       
        
        var leng = $('input [type="radio"][name="empGen"]:checked').length;
        console.log("length of the variable is "+leng);

      })

    });
  }
}
