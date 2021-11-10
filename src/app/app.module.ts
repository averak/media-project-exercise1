import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './component/error/error.module';
import { DashboardModule } from './component/dashboard/dashboard.module';
import { WebIntroModule } from './component/web-intro/web-intro.module';
import { WebHistoryModule } from './component/web-history/web-history.module';
import { ModernWebModule } from './component/modern-web/modern-web.module';
import { AboutModule } from './component/about/about.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ErrorModule,
    DashboardModule,
    WebIntroModule,
    WebHistoryModule,
    ModernWebModule,
    AboutModule,

    SharedModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
