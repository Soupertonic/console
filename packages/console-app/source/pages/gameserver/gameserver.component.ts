import { Component, ViewEncapsulation } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-gameserver',
  templateUrl: 'gameserver.component.html',
  styleUrl: 'gameserver.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [RouterOutlet],
})
export class GameserverComponent {}
