import { NgZone, Provider, ɵNoopNgZone } from '@angular/core'

export const provideNoopNgZone = (): Provider => {
  return { provide: NgZone, useClass: ɵNoopNgZone }
}
