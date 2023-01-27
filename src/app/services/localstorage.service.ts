import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  get<T>(key: string): T {
    const valueAsString = window.localStorage.getItem(key) ?? '';
    const parse = JSON.parse(valueAsString);
    return parse as T;
  }
  set<T>(key: string, value: T) {
    const valueAsString = JSON.stringify(value);
    window.localStorage.setItem(key, valueAsString);
  }
}
