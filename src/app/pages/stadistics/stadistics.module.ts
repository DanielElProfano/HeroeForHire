import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { StadisticsRoutingModule } from './stadistics-routing.module';
import { StadisticsComponent } from './stadistics-component/stadistics.component';
import { StickerComponent } from './stadistics-component/sticker/sticker.component';
import { GraphComponent } from './stadistics-component/graph/graph.component';
import { FilterComponent } from './stadistics-component/filter/filter.component';


@NgModule({
  declarations: [StadisticsComponent, StickerComponent, GraphComponent, FilterComponent],
  imports: [
    CommonModule,
    StadisticsRoutingModule,
    ChartsModule,
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StadisticsModule { }
