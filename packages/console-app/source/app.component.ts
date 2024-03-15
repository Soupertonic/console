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
    <br />
    <br />
    <div style="display: flex; flex-direction: column; gap: 30px; width: 50%;">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <h2 style="margin: 0;">Ein wenig Geduld</h2>
        <span>Wir migrieren deine alte Konsole zur neuen Konsole</span>
      </div>
      <console-progress-bar
        [minimum]="0"
        [mean]="currentPlayerCount()"
        [maximum]="maximumPlayerCount()"
        [mode]="'indeterminate'"
      />
    </div>
    <br />
    <br />
    <br />
    <br />
    <console-meter [minimum]="0" [mean]="currentPlayerCount()" [maximum]="maximumPlayerCount()">
      <console-meter-label [text]="'Spieleranzahl'" />
      <console-meter-value [text]="currentPlayerCount() + ' / ' + maximumPlayerCount()" />
    </console-meter>
  `,
  styles: ``,
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
