import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "@nativescript/angular";
import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'ModalRootComponent',
    templateUrl: './modal-root.component.html'
})
export class ModalRootComponent implements OnInit{

    constructor(
        private _routerExtensions: RouterExtensions,
        private _activeRoute: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this._routerExtensions.navigate(["modal-home"], { relativeTo: this._activeRoute });
    }

}
