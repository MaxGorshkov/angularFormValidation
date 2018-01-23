import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppCustomValidationDirective } from './customValidation.directive';

@NgModule({
  declarations: [
    AppCustomValidationDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    AppCustomValidationDirective
  ]
})
export class AppCustomValidationModule { }
