import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';


//import { HomeComponent } from '../home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { InputpanelComponent } from './inputpanel/inputpanel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule,
    SelectButtonModule,
    CalendarModule,
    ButtonModule,
    ToggleButtonModule,
    InputTextModule,
    OverlayPanelModule,
    CheckboxModule,
    KeyFilterModule,
    TooltipModule,
    ProgressSpinnerModule,
    ToastModule,
    DynamicDialogModule,
    DialogModule,
    RadioButtonModule,
    InputMaskModule,

    RouterModule
  ],
  declarations: [
    SpinnerComponent,
    InputpanelComponent
    
  ],
  exports: [
    SpinnerComponent,
    InputpanelComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule,
    SelectButtonModule,
    CalendarModule,
    ButtonModule,
    ToggleButtonModule,
    InputTextModule,
    OverlayPanelModule,
    CheckboxModule,
    KeyFilterModule,
    TooltipModule,
    ProgressSpinnerModule,
    ToastModule,
    DynamicDialogModule,
    DialogModule,
    RadioButtonModule,
    InputMaskModule,

    RouterModule

  ],
  entryComponents: [    
  ],
  providers: [

  ],

})

export class SharedModule {

}
