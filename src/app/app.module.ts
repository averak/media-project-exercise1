import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainContainerComponent } from './component/main-container/main-container.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainContainerComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent, SharedModule, AppRoutingModule, BrowserModule, BrowserAnimationsModule],
})
export class AppModule {}
