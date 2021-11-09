import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { WebHistoryComponent } from './web-history.component';

const routes: Routes = [
  {
    path: '',
    component: WebHistoryComponent,
    data: { breadcrumb: 'Webの歴史', title: 'Webの歴史' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebHistoryRoutingModule {}
