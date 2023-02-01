import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import {SecondScreenComponent} from "./second-screen.component";
import {modalRoutes} from "../modal/modal.module";

const routes: Routes = [
  {
    path: '', component: SecondScreenComponent,
    children: [
      ...modalRoutes
    ]
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SecondScreenRoutingModule {}
