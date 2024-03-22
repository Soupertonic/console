import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-gameserver',
  templateUrl: 'gameserver.component.html',
  styleUrl: 'gameserver.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class GameserverComponent {}
