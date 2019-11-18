import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterDemo1SharedModule } from 'app/shared/shared.module';

import { JhiDocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [JhipsterDemo1SharedModule, RouterModule.forChild([docsRoute])],
  declarations: [JhiDocsComponent]
})
export class DocsModule {}
