import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-gameserver-outlet-board',
  templateUrl: 'gameserver-outlet-board.component.html',
  styleUrl: 'gameserver-outlet-board.component.scss',
  imports: [RouterOutlet],
})
export class GameserverOutletBoard {}
