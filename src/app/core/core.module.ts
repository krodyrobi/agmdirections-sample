import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction/src/agm-direction.module';

const routes: Route[] = [
  {
    path: '',
    loadChildren: '../feature1/feature1.module#Feature1Module'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'key',
    }),
    AgmDirectionModule,
  ],
  declarations: []
})
export class CoreModule {
}
