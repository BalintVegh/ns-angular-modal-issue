import { Component, OnInit } from '@angular/core'
import {RouterExtensions} from "@nativescript/angular";
import {Page} from "@nativescript/core";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private _routerExtensions: RouterExtensions,
    private page: Page
  ) {

  }

  ngOnInit(): void {
    console.log("Home ngOnInit");
    this.page.on("navigatedTo", args => {
      console.log("navigatedTo Home page", args.isBackNavigation);
    });
  }

  navToSecondScreen() {
    this._routerExtensions.navigate(["second-screen"]);
  }

}
