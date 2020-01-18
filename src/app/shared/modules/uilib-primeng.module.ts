import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataViewModule} from 'primeng/dataview';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataViewModule,
    TabViewModule
  ],
  exports: [
    DataViewModule,
    TabViewModule
  ]
})
export class UilibPrimengModule { }
