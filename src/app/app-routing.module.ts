import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainContainerComponent } from './shared/component/main-container/main-container.component';

// modules
import { DashboardRoutingModule } from './component/dashboard/dashboard-routing.module';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => DashboardRoutingModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
