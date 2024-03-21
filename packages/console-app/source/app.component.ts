import { Component, ViewEncapsulation } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-app',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [RouterOutlet],
})
export class AppComponent {}
