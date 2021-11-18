import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DocumentComponent } from 'src/app/shared/component/document/document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentComponent,
    data: {
      breadcrumb: 'Webの基本',
      title: 'Webの基本',
      markdown: 'assets/docs/web-intro/index.md',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebIntroRoutingModule {}
