import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Michi } from '../models/Michi';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  add: string = '';

  dataForm = this.formBuilder.group({
    add: new FormControl('', [Validators.required])
  })
  constructor(private formBuilder: FormBuilder) { }

  saveInput() {
    const newAdd: Michi = {
      name: this.dataForm.value.add ?? '',
    }
    console.log(newAdd)
    this.dataForm.reset()
  }
}
