import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { Meter, MeterLabel, MeterValue } from './meter'
import { ProgressBar } from './progress-bar'

@Component({
  selector: 'console-app',
  standalone: true,
  imports: [RouterOutlet, Meter, MeterLabel, MeterValue, ProgressBar],
  template: `
    <router-outlet></router-outlet>

    <button (click)="f()">+</button>
    <button (click)="b()">-</button>
    <br />
    <br />
    <console-progress-bar
      [minimum]="0"
      [mean]="currentPlayerCount()"
      [maximum]="maximumPlayerCount()"
      [size]="'slim'"
      [mode]="'static'"
    />
    <br />
    <br />
    <console-meter
      [minimum]="0"
      [mean]="currentPlayerCount()"
      [maximum]="maximumPlayerCount()"
    >
      <console-meter-label [text]="'Spieleranzahl'" />
      <console-meter-value
        [text]="currentPlayerCount() + ' / ' + maximumPlayerCount()"
      />
    </console-meter>
  `,
  styles: ``,
})
export class AppComponent {
  currentPlayerCount = signal(0)
  maximumPlayerCount = signal(100)

  f() {
    this.currentPlayerCount.update((v) => v + 5)
  }
  b() {
    this.currentPlayerCount.update((v) => v - 5)
  }
}
