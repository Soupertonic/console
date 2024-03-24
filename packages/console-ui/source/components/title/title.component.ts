import { Component, inject } from '@angular/core'
import { Title as PageTitle } from '@angular/platform-browser'

@Component({
  standalone: true,
  selector: 'console-title',
  templateUrl: 'title.component.html',
  styleUrl: 'title.component.scss',
  imports: [],
})
export class Title {
  private _pageTitle = inject(PageTitle)
  private _segments = new Array<string>()

  public segment(segment: string) {
    this._segments.push(segment)
  }

  public reconcile(): void {
    this._pageTitle.setTitle(this._segments.join(' • '))
  }
}
