import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AboutComponent } from './about.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: '本ページについて' },
    children: [
      {
        path: '',
        component: AboutComponent,
        data: { breadcrumb: null, title: '本ページについて' },
      },
      {
        path: 'tech',
        component: TechComponent,
        data: { breadcrumb: '技術構成', title: '技術構成' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
