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
      title: 'Webの基本',
      markdown: 'assets/docs/web-intro/index.md',
    },
  },
  {
    path: 'http',
    component: DocumentComponent,
    data: {
      breadcrumb: 'HTTPとは',
      title: 'HTTPとは',
      markdown: 'assets/docs/web-intro/http.md',
    },
  },
  {
    path: 'uri',
    component: DocumentComponent,
    data: {
      breadcrumb: 'URIとは',
      title: 'URIとは',
      markdown: 'assets/docs/web-intro/uri.md',
    },
  },
  {
    path: 'html',
    component: DocumentComponent,
    data: {
      breadcrumb: 'HTMLとは',
      title: 'HTMLとは',
      markdown: 'assets/docs/web-intro/html.md',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebIntroRoutingModule {}
