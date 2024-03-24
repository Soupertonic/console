import { Component, ElementRef, inject } from '@angular/core'

import { Title } from '../title/title.component'

@Component({
  standalone: true,
  selector: 'console-title-segment',
  templateUrl: 'title-segment.component.html',
  styleUrl: 'title-segment.component.scss',
  imports: [],
})
export class TitleSegment {
  private _title = inject(Title)
  private _element = inject(ElementRef<TitleSegment>)

  public ngOnInit(): void {
    this._title.segment(this._element.nativeElement.innerText.trim())
    this._title.reconcile()
  }
}
