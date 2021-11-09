import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContainerComponent } from './component/main-container/main-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
