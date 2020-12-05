import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { StadisticsRoutingModule } from './stadistics-routing.module';
import { StadisticsComponent } from './stadistics-component/stadistics.component';
import { StickerComponent } from './stadistics-component/sticker/sticker.component';
import { GraphComponent } from './stadistics-component/graph/graph.component';
import { FilterComponent } from './stadistics-component/filter/filter.component';
import { DetailComponent } from './stadistics-component/detail/detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
// import { FormComponent } from './stadistics-component/filter/form/form.component';



@NgModule({
  declarations:
   [
      StadisticsComponent, 
      StickerComponent,
      GraphComponent,
      FilterComponent,
      DetailComponent,
      // FormComponent
    ],
  imports: [
    CommonModule,
    StadisticsRoutingModule,
    ChartsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    ReactiveFormsModule
   
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StadisticsModule { }
