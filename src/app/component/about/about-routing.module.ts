import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DocumentComponent } from 'src/app/shared/component/document/document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentComponent,
    data: {
      breadcrumb: null,
      title: '本ページについて',
      markdown: 'assets/docs/about/index.md',
    },
  },
  {
    path: 'tech',
    component: DocumentComponent,
    data: { breadcrumb: '技術構成', title: '技術構成', markdown: 'assets/docs/about/tech.md' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
