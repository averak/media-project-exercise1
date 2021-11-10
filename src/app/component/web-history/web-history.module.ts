import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { WebHistoryComponent } from './web-history.component';

@NgModule({
  declarations: [WebHistoryComponent],
  imports: [SharedModule],
})
export class WebHistoryModule {}
