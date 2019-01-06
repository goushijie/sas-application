import { NgModule } from '@angular/core';

import { SasSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SasSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SasSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SasSharedCommonModule {}
