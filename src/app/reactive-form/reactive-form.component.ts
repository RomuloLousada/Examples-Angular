import { Component } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  visible: boolean = false;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, forbiddenName('teste')]),
    address: new FormControl('')
  });

  onSubmitForm() {
    console.log(this.myForm.value);
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }
}

export function forbiddenName(name: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (control.value.toLowerCase() === name) {
      return {forbiddenName: {value: control.value}};
    } 
      
    return null;
  }
}