import { createReducer, on } from "@ngrx/store";
import { addMichi } from '../actions/michis.actions';
import { Michi } from "src/app/features/models/Michi";

export const initialState: Michi[] = []

export const michisReducer = createReducer(
    initialState,
    on(addMichi, (state, { newMichi }) => [...state, newMichi]),
)