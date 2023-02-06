import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-mamform',
  templateUrl: './mamform.component.html',
  styleUrls: ['./mamform.component.css']
})
export class MamformComponent implements OnInit {
  regForm!:FormGroup;
  constructor(private fB:FormBuilder) { }

  ngOnInit(): void {
    this.regForm=this.fB.group({
      fname:['',[Validators.required,Validators.maxLength(4)]],
      mail:[''],
      pwd:[''],
      altMail:this.fB.array([])
   });
  }

  get altMail()
  {
    return this.regForm.get('altMail') as FormArray;
  }
  
  addNewMail()
  {
     this.altMail.push(this.fB.control('',[Validators.required,Validators.minLength(10)]))
  }

  removeMail(i:number)
  {
    this.altMail.removeAt(i)
  }
 
  regDataSubmit()
  {
    // alert("Data submitted successfully");
    
    // console.log(this.regForm.controls['altMail'].status);
     console.log(this.regForm.value);
  }
  

}
