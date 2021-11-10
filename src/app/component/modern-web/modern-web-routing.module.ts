import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ModernWebComponent } from './modern-web.component';

const routes: Routes = [
  {
    path: '',
    component: ModernWebComponent,
    data: { breadcrumb: '最新技術', title: '最新技術' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModernWebRoutingModule {}
