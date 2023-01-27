import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Michi } from '../../models/Michi';
import { addMichi, loadMichis } from 'src/app/store/actions/michis.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  michis$: Observable<Michi[]> = this.store.select((store) => store.michis);

  dataForm = this.formBuilder.group({
    add: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ michis: Michi[] }>
  ) {}
  ngOnInit(): void {
    this.store.dispatch(loadMichis());
  }
  saveInput() {
    const newMichi: Michi = {
      name: this.dataForm.value.add ?? '',
    };
    this.store.dispatch(addMichi({ newMichi }));
    this.dataForm.reset();
  }
}
