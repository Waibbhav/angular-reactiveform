import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 addForm !: FormGroup
  constructor() { }

  ngOnInit(): void {
      this.addForm= new FormGroup({
        fname:new FormControl('',[Validators.required,Validators.minLength(3)]),
        lname:new FormControl('',[Validators.required,Validators.minLength(3)]),
        email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9+]{3,25}@[a-z]{3,10}.[a-z.]{2,10}$')]),
        pass:new FormControl('',Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$"))
      })
  }
    dataSubmit(){
    console.log(this.addForm.value)
    }

}
