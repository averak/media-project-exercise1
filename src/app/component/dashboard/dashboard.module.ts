import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { DashboardComponent } from './dashboard.component';
import { DocumentCardComponent } from './document-card/document-card.component';
import { DocumentVersionChipComponent } from './document-version-chip/document-version-chip.component';

@NgModule({
  declarations: [DashboardComponent, DocumentCardComponent, DocumentVersionChipComponent],
  imports: [SharedModule],
})
export class DashboardModule {}
