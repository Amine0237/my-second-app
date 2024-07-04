import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-approch',
  templateUrl: './template-driven-approch.component.html',
  styleUrls: ['./template-driven-approch.component.css']
})
export class TemplateDrivenApprochComponent {

  @ViewChild('myForm', {static: true}) myForm!: NgForm;

  constructor(){}
  ngOnInit(): void{}

  onSubmit(myForm: NgForm){
    this.myForm.reset();
  }

}
