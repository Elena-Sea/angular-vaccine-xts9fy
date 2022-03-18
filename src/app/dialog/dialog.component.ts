import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formValue !: FormGroup;  
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {

  }

  vaccandform=new FormGroup({
    name:new FormControl(),
    surname:new FormControl(),
    birthday:new FormControl(),
    email:new FormControl(),
    tel:new FormControl(),
  });

  SaveCandidate(){
    console.log(this.vaccandform.value);
  }

}