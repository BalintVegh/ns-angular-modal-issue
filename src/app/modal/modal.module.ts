import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core'
import {NativeScriptCommonModule, NativeScriptRouterModule} from '@nativescript/angular'
import {ModalRootComponent} from "./modal-root.component";
import {ModalHomeComponent} from "./modal-home.component";
import {Routes} from "@angular/router";

export const modalRoutes: Routes = [
  {
    path: 'modal-home', component: ModalHomeComponent
  }
]

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule
  ],
  declarations: [
    ModalRootComponent,
    ModalHomeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ModalModule {
}
