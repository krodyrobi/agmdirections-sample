import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction/src/agm-direction.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    RouterModule,
    AgmCoreModule,
    AgmDirectionModule,
  ],
  declarations: []
})
export class SharedModule {
}
