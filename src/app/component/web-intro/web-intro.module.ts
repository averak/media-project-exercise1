import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { WebIntroComponent } from './web-intro.component';

@NgModule({
  declarations: [WebIntroComponent],
  imports: [SharedModule],
})
export class WebIntroModule {}
