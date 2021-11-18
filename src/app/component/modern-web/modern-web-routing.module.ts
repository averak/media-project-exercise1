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
      title: '最新技術',
      markdown: 'assets/docs/modern-web/index.md',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModernWebRoutingModule {}
