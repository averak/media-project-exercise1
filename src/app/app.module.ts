import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, SharedModule, AppRoutingModule, BrowserModule, BrowserAnimationsModule],
})
export class AppModule {}
