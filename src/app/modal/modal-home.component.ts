import {Component, OnInit} from "@angular/core";
import {ModalDialogParams} from "@nativescript/angular";

@Component({
    selector: 'ModalHomeComponent',
    moduleId: module.id,
    templateUrl: "./modal-home.component.html"
})
export class ModalHomeComponent implements OnInit {

    constructor(
        private params: ModalDialogParams
    ) {

    }
    ngOnInit(): void {

    }

    onClose(): void {
        this.params.closeCallback('cancel');
    }

}
