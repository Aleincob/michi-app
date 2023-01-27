import { createReducer, on } from '@ngrx/store';
import { addMichi, loadMichis, setMichis } from '../actions/michis.actions';
import { Michi } from 'src/app/models/Michi';

export const initialState: Michi[] = [];

export const michisReducer = createReducer(
  initialState,
  on(addMichi, (state, { newMichi }) => [...state, newMichi]),
  on(setMichis, (state, { michis }) => [...state, ...michis])
);
