import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { loadMichis, setMichis } from '../actions/michis.actions';

@Injectable()
export class MichiEffects {
  loadMichis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMichis),
      map(() => {
        const newMichi = { name: 'bruno' };
        return setMichis({ michis: [newMichi] });
      })
    )
  );

  constructor(private actions$: Actions) {}
}
