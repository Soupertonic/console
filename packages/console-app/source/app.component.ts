import { Component, ViewEncapsulation, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Meter, MeterLabel, MeterValue } from './components/meter'
import { ProgressBar } from './components/progress-bar'

@Component({
  standalone: true,
  selector: 'console-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [RouterOutlet, Meter, MeterLabel, MeterValue, ProgressBar],
})
export class AppComponent {
  currentPlayerCount = signal(0)
  maximumPlayerCount = signal(100)

  f() {
    this.currentPlayerCount.update((v) => v + 2)
  }
  b() {
    this.currentPlayerCount.update((v) => v - 2)
  }
}
