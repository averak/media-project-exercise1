import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { WebIntroComponent } from './web-intro.component';

const routes: Routes = [
  {
    path: '',
    component: WebIntroComponent,
    data: { breadcrumb: 'Webの基本', title: 'Webの基本' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebIntroRoutingModule {}
