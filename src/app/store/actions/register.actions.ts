import { createAction, props } from '@ngrx/store';
import { Michi } from 'src/app/features/models/Michi';

export const addMichi = createAction('[Register] addMichi', props<{ newMichi: Michi }>())