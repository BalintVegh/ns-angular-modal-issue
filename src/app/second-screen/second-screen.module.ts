import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import {ModalDialogService, NativeScriptCommonModule} from '@nativescript/angular'
import {SecondScreenComponent} from "./second-screen.component";
import {SecondScreenRoutingModule} from "./second-screen-routing.module";
import {ModalModule} from "../modal/modal.module";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    SecondScreenRoutingModule,
    ModalModule
  ],
  declarations: [
    SecondScreenComponent
  ],
  exports: [],
  providers: [
    ModalDialogService
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SecondScreenModule {}
