import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { SampleComponent } from './sample/sample.component';
import {Route, RouterModule} from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    component: SampleComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SampleComponent]
})
export class Feature1Module { }
