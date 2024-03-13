import { Component, input } from '@angular/core'

@Component({
  selector: 'console-label',
  standalone: true,
  imports: [],
  template: `{{ content() }}`,
  styles: [
    `
      :host {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.016em;
        color: #969696;
      }
    `,
  ],
})
export class Label {
  public content = input.required<string>()
}
