import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-app',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  imports: [RouterOutlet],
})
export class App {}
