import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  formValue !: FormGroup;  
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {

    this.formValue = this.formbuilder.group({
      name : [''],
      surname : [''],
      birthday : [''],
      email : [''],
      tel : ['']

    })

  }

}