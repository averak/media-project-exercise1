import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule],
})
export class DashboardModule {}
