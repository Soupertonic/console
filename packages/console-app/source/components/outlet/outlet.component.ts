import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  standalone: true,
  selector: 'console-app-outlet',
  templateUrl: 'outlet.component.html',
  styleUrl: 'outlet.component.scss',
  imports: [RouterOutlet],
})
export class AppOutlet {}
