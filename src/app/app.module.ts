import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {HelloDisplayComponent} from './hello-display/hello-display.component';
import {PersonFormComponent} from './person-form/person-form.component';

import {getDeclarations, getImports, StateService} from './state.service';

import {ReduxCheckboxesComponent} from './redux-checkboxes.component';
import {ReduxInputComponent} from './redux-input.component';
import {ReduxRadioButtonsComponent} from './redux-radio-buttons.component';
import {ReduxSelectComponent} from './redux-select.component';
import {ReduxTextAreaComponent} from './redux-textarea.component';
/*
import {
  getDeclarations,
  getImports,
  ReduxCheckboxesComponent,
  ReduxInputComponent,
  ReduxTextAreaComponent,
  ReduxRadioButtonsComponent,
  ReduxSelectComponent,
  StateService
} from 'ngrx-store-easy';
*/

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    HelloDisplayComponent,
    ...getDeclarations(),
    ReduxCheckboxesComponent,
    ReduxInputComponent,
    ReduxRadioButtonsComponent,
    ReduxSelectComponent,
    ReduxTextAreaComponent
  ],
  imports: [BrowserModule, FormsModule, ...getImports(environment)],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
