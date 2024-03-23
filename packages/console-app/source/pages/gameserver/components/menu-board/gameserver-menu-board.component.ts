import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Button, ButtonIcon, ButtonLabel } from '@console/ui/components/button'

@Component({
  standalone: true,
  selector: 'console-gameserver-menu-board',
  templateUrl: 'gameserver-menu-board.component.html',
  styleUrl: 'gameserver-menu-board.component.scss',
  imports: [RouterLink, Button, ButtonIcon, ButtonLabel],
})
export class GameserverMenuBoard {}
