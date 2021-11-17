import { NgModule } from '@angular/core';

// modules
import { SharedModule } from 'src/app/shared/shared.module';

// components
import { AboutComponent } from './about.component';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [AboutComponent, TechComponent],
  imports: [SharedModule],
})
export class AboutModule {}
