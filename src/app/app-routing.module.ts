import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { MainContainerComponent } from './shared/component/main-container/main-container.component';

// modules
import { ErrorRoutingModule } from './component/error/error-routing.module';
import { DashboardRoutingModule } from './component/dashboard/dashboard-routing.module';
import { WebIntroRoutingModule } from './component/web-intro/web-intro-routing.module';
import { WebHistoryRoutingModule } from './component/web-history/web-history-routing.module';
import { ModernWebRoutingModule } from './component/modern-web/modern-web-routing.module';
import { AboutRoutingModule } from './component/about/about-routing.module';

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
        path: 'web-intro',
        data: { breadcrumb: 'Webの基本' },
        loadChildren: () => WebIntroRoutingModule,
      },
      {
        path: 'web-history',
        data: { breadcrumb: 'Webの歴史' },
        loadChildren: () => WebHistoryRoutingModule,
      },
      {
        path: 'modern-web',
        data: { breadcrumb: 'モダンなWeb技術' },
        loadChildren: () => ModernWebRoutingModule,
      },
      {
        path: 'about',
        data: { breadcrumb: '本ページについて' },
        loadChildren: () => AboutRoutingModule,
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
