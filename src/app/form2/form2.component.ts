import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,Validators } from "@angular/forms";
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  addForm !: FormGroup
  constructor(private fbuild:FormBuilder) { }

  ngOnInit(): void {
    this.addForm= this.fbuild.group({
      fname:['',[Validators.required,Validators.minLength(3)]],
      lname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9+]{3,25}@[a-z]{3,10}.[a-z.]{2,10}$')]],
      pass:['',[Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$")]],
      altMail:this.fbuild.array([]) ///2nd step
    })
  }

  get altMail()
  {
    return this.addForm.get('altMail') as FormArray; // 3rd step
  }
  addNewMail(){
    // alert("Add button clicked");
    this.altMail.push(this.fbuild.control('',[Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$")])); // 4th step
  }

  dataSubmit(){
    console.log(this.addForm.value)
    }
  }
