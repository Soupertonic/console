import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-gameserver-menu-board',
  templateUrl: 'gameserver-menu-board.component.html',
  styleUrl: 'gameserver-menu-board.component.css',
  imports: [RouterLink],
})
export class GameserverMenuBoard {}
