import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BugTrackerHipsterSharedLibsModule,
  BugTrackerHipsterSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [BugTrackerHipsterSharedLibsModule, BugTrackerHipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BugTrackerHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BugTrackerHipsterSharedModule {
  static forRoot() {
    return {
      ngModule: BugTrackerHipsterSharedModule
    };
  }
}
