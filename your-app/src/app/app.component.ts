import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];
  defaultSelect = this.states[0];

  constructor(private fb: FormBuilder){
    this.createForm();

    this.form.valueChanges.subscribe(data => {
      console.log('Form changes', data.state)
    })
  }

  createForm(){
    this.form = this.fb.group({
      state: this.defaultSelect
    })
  }

}
