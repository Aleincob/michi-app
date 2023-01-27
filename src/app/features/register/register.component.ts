import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
    const newAdd = {
      add: this.dataForm.value.add ?? '',
    }
    console.log(newAdd)
    this.dataForm.reset()
  }
}
