import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction/src/agm-direction.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    AgmCoreModule,
    AgmDirectionModule,
  ],
  declarations: []
})
export class SharedModule {
}
