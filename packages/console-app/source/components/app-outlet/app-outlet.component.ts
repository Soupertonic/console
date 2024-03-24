import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-app-outlet',
  templateUrl: 'app-outlet.component.html',
  styleUrl: 'app-outlet.component.scss',
  imports: [RouterOutlet],
})
export class AppOutlet {}
