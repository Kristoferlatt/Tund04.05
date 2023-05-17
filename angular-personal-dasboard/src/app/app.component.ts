import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger("routeAnim", [
      transition("* => *", [
        query(':enter', [
        style({
        background: 'wheat'
        })
      ]),
        style({
          background: "blue"
        }),
        animate(1000)
      ])

    ])
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab']
      if (!tab) return 'secondary'
      return tab
    }
  }
}
