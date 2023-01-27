import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './features/register/register.component';
import { StoreModule } from '@ngrx/store';
import { michisReducer } from './store/reducers/michis.reducer';
import { store } from './store/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MichiEffects } from './store/effects/michis.effects';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(store),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([MichiEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
