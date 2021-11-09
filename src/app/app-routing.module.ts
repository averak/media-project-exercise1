import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainContainerComponent } from './shared/component/main-container/main-container.component';

// modules
import { ErrorRoutingModule } from './component/error/error-routing.module';
import { DashboardRoutingModule } from './component/dashboard/dashboard-routing.module';
import { WebHistoryRoutingModule } from './component/web-history/web-history-routing.module';

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
      {
        path: 'web-history',
        loadChildren: () => WebHistoryRoutingModule,
      },
    ],
  },
  {
    path: 'error',
    loadChildren: () => ErrorRoutingModule,
  },
  { path: '**', redirectTo: '/error?status_code=404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
