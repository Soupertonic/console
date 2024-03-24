import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-gameserver-outlet',
  templateUrl: 'gameserver-outlet.component.html',
  styleUrl: 'gameserver-outlet.component.scss',
  imports: [RouterOutlet],
})
export class GameserverOutlet {}
