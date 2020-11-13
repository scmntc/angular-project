import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule, 
    MatInputModule, 
    MatAutocompleteModule, 
    MatDatepickerModule, 
    MatFormFieldModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatSliderModule, 
    MatSlideToggleModule, 
    MatMenuModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule, 
    MatInputModule, 
    MatAutocompleteModule, 
    MatDatepickerModule, 
    MatFormFieldModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatSliderModule, 
    MatSlideToggleModule, 
    MatMenuModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule
  ]
})
export class MaterialModule { }
