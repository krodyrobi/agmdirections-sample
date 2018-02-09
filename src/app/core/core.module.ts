import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction/src/agm-direction.module';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'key',
    }),
    AgmDirectionModule,
  ],
  declarations: []
})
export class CoreModule {
}
