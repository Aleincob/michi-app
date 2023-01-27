import { createAction, props } from '@ngrx/store';
import { Michi } from 'src/app/models/Michi';

export const addMichi = createAction(
  '[Michis] addMichi',
  props<{ newMichi: Michi }>()
);
export const loadMichis = createAction('[Michis] loadMichis');
export const setMichis = createAction(
  '[Michis] setMichis',
  props<{ michis: Michi[] }>()
);
