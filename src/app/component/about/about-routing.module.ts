import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { breadcrumb: '技術構成', title: '技術構成' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
