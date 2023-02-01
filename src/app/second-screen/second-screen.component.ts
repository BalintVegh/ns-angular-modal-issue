import {Component, OnInit, ViewContainerRef} from '@angular/core'
import {ModalDialogService} from "@nativescript/angular";
import {ModalRootComponent} from "../modal/modal-root.component";

@Component({
  selector: 'SecondScreen',
  templateUrl: './second-screen.component.html',
})
export class SecondScreenComponent implements OnInit {
  constructor(
    private modalDialogService: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {

  }

  ngOnInit(): void {

  }

  openModal() {
    this.modalDialogService.showModal(ModalRootComponent, {
      viewContainerRef: this.vcRef,
      fullscreen: true,
      animated: false
    }).then(value => {

    }).catch(reason => {

    });
  }

}
