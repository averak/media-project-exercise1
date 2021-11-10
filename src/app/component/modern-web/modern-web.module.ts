import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { ModernWebComponent } from './modern-web.component';

@NgModule({
  declarations: [ModernWebComponent],
  imports: [SharedModule],
})
export class ModernWebModule {}
