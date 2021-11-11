import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { breadcrumb: '本ページについて', title: '本ページについて' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
