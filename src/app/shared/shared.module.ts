import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    ButtonsModule,
    LabelModule,
    InputsModule,
    DropDownsModule
    ],
  exports: [
    CommonModule,
    PageNotFoundComponent,
    HelpComponent,
    GridModule,
    ButtonsModule,
    LabelModule,
    InputsModule,
    DropDownsModule
  ]
})
export class SharedModule { }
